import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Bundle Analysis Configuration
class AstroBundleAnalyzer {
  constructor() {
    this.distDir = path.join(__dirname, 'dist');
    this.reportsDir = path.join(__dirname, 'performance-reports');
  }

  async analyzeBundles() {
    console.log('📦 Analyzing Astro build bundles...\n');

    if (!fs.existsSync(this.distDir)) {
      console.log('❌ No dist directory found. Please run "npm run build" first.');
      return null;
    }

    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }

    // Analyze different asset types
    const analysis = {
      timestamp: new Date().toISOString(),
      totalSize: 0,
      assets: {
        js: await this.analyzeAssets('**/*.js', 'JavaScript'),
        css: await this.analyzeAssets('**/*.css', 'CSS'),
        images: await this.analyzeAssets('**/*.{png,jpg,jpeg,gif,svg,webp}', 'Images'),
        fonts: await this.analyzeAssets('**/*.{woff,woff2,eot,ttf}', 'Fonts'),
        other: await this.analyzeAssets('**/*.{html,json,xml,txt}', 'Other')
      },
      pages: await this.analyzePages(),
      recommendations: []
    };

    // Calculate total size
    Object.values(analysis.assets).forEach(assetType => {
      analysis.totalSize += assetType.totalSize;
    });

    // Generate recommendations
    analysis.recommendations = this.generateRecommendations(analysis);

    // Save analysis report
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, `bundle-analysis-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));

    // Display results
    this.displayResults(analysis);
    
    console.log(`\n📁 Bundle analysis saved to: ${reportPath}`);

    return analysis;
  }

  async analyzeAssets(pattern, type) {
    try {
      const files = await glob(pattern, { cwd: this.distDir, absolute: true });
      
      const assets = files.map(file => {
        const stats = fs.statSync(file);
        const relativePath = path.relative(this.distDir, file);
        
        return {
          path: relativePath,
          size: stats.size,
          sizeKB: Math.round(stats.size / 1024 * 100) / 100,
          lastModified: stats.mtime
        };
      });

      // Sort by size (largest first)
      assets.sort((a, b) => b.size - a.size);

      const totalSize = assets.reduce((sum, asset) => sum + asset.size, 0);

      return {
        type,
        count: assets.length,
        totalSize,
        totalSizeKB: Math.round(totalSize / 1024 * 100) / 100,
        assets,
        largestAsset: assets[0] || null,
        avgSize: assets.length > 0 ? Math.round(totalSize / assets.length) : 0
      };
    } catch (error) {
      console.warn(`Warning: Could not analyze ${type} assets:`, error.message);
      return {
        type,
        count: 0,
        totalSize: 0,
        totalSizeKB: 0,
        assets: [],
        largestAsset: null,
        avgSize: 0
      };
    }
  }

  async analyzePages() {
    try {
      const htmlFiles = await glob('**/*.html', { cwd: this.distDir, absolute: true });
      
      const pages = await Promise.all(htmlFiles.map(async (file) => {
        const stats = fs.statSync(file);
        const content = fs.readFileSync(file, 'utf8');
        const relativePath = path.relative(this.distDir, file);
        
        // Count resources referenced in HTML
        const scriptMatches = content.match(/<script[^>]*src=["'][^"']*["'][^>]*>/g) || [];
        const linkMatches = content.match(/<link[^>]*href=["'][^"']*["'][^>]*>/g) || [];
        const imageMatches = content.match(/<img[^>]*src=["'][^"']*["'][^>]*>/g) || [];
        
        return {
          path: relativePath,
          size: stats.size,
          sizeKB: Math.round(stats.size / 1024 * 100) / 100,
          resourceCounts: {
            scripts: scriptMatches.length,
            stylesheets: linkMatches.filter(link => link.includes('rel="stylesheet"')).length,
            images: imageMatches.length,
            preloads: linkMatches.filter(link => link.includes('rel="preload"')).length
          },
          lastModified: stats.mtime
        };
      }));

      pages.sort((a, b) => b.size - a.size);

      return {
        count: pages.length,
        totalSize: pages.reduce((sum, page) => sum + page.size, 0),
        pages,
        largestPage: pages[0] || null,
        avgSize: pages.length > 0 ? Math.round(pages.reduce((sum, page) => sum + page.size, 0) / pages.length) : 0
      };
    } catch (error) {
      console.warn('Warning: Could not analyze pages:', error.message);
      return {
        count: 0,
        totalSize: 0,
        pages: [],
        largestPage: null,
        avgSize: 0
      };
    }
  }

  generateRecommendations(analysis) {
    const recommendations = [];

    // JavaScript recommendations
    if (analysis.assets.js.totalSizeKB > 300) {
      recommendations.push({
        type: 'warning',
        category: 'JavaScript',
        message: `JavaScript bundle is ${analysis.assets.js.totalSizeKB}KB. Consider code splitting or removing unused libraries.`,
        impact: 'high'
      });
    }

    // CSS recommendations
    if (analysis.assets.css.totalSizeKB > 100) {
      recommendations.push({
        type: 'warning',
        category: 'CSS',
        message: `CSS bundle is ${analysis.assets.css.totalSizeKB}KB. Consider purging unused CSS.`,
        impact: 'medium'
      });
    }

    // Image recommendations
    if (analysis.assets.images.totalSizeKB > 1000) {
      recommendations.push({
        type: 'info',
        category: 'Images',
        message: `Images total ${analysis.assets.images.totalSizeKB}KB. Consider using WebP format and responsive images.`,
        impact: 'medium'
      });
    }

    // Page size recommendations
    const largePagesCount = analysis.pages.pages.filter(page => page.sizeKB > 50).length;
    if (largePagesCount > 0) {
      recommendations.push({
        type: 'info',
        category: 'HTML',
        message: `${largePagesCount} pages are larger than 50KB. Consider optimizing HTML output.`,
        impact: 'low'
      });
    }

    // Overall bundle size
    if (analysis.totalSize > 2000000) { // 2MB
      recommendations.push({
        type: 'warning',
        category: 'Overall',
        message: `Total bundle size is ${Math.round(analysis.totalSize / 1024 / 1024)}MB. This may impact loading performance.`,
        impact: 'high'
      });
    }

    return recommendations;
  }

  displayResults(analysis) {
    console.log('📊 BUNDLE ANALYSIS RESULTS');
    console.log('==========================');
    console.log(`Total Bundle Size: ${Math.round(analysis.totalSize / 1024 / 1024 * 100) / 100}MB\n`);

    // Asset breakdown
    Object.values(analysis.assets).forEach(assetType => {
      if (assetType.count > 0) {
        console.log(`${assetType.type}:`);
        console.log(`  📁 Files: ${assetType.count}`);
        console.log(`  💾 Total Size: ${assetType.totalSizeKB}KB`);
        console.log(`  📊 Average Size: ${Math.round(assetType.avgSize / 1024 * 100) / 100}KB`);
        if (assetType.largestAsset) {
          console.log(`  🔍 Largest: ${assetType.largestAsset.path} (${assetType.largestAsset.sizeKB}KB)`);
        }
        console.log('');
      }
    });

    // Page analysis
    console.log(`Pages:`);
    console.log(`  📄 Count: ${analysis.pages.count}`);
    console.log(`  💾 Total HTML Size: ${Math.round(analysis.pages.totalSize / 1024 * 100) / 100}KB`);
    if (analysis.pages.largestPage) {
      console.log(`  🔍 Largest: ${analysis.pages.largestPage.path} (${analysis.pages.largestPage.sizeKB}KB)`);
    }
    console.log('');

    // Recommendations
    if (analysis.recommendations.length > 0) {
      console.log('💡 RECOMMENDATIONS');
      console.log('==================');
      analysis.recommendations.forEach(rec => {
        const icon = rec.type === 'warning' ? '⚠️' : rec.type === 'error' ? '❌' : 'ℹ️';
        console.log(`${icon} [${rec.impact.toUpperCase()}] ${rec.category}: ${rec.message}`);
      });
    } else {
      console.log('✅ Bundle size looks optimal!');
    }
  }
}

// Run bundle analysis
async function runBundleAnalysis() {
  const analyzer = new AstroBundleAnalyzer();
  return await analyzer.analyzeBundles();
}

// Export for use in other scripts
export { AstroBundleAnalyzer, runBundleAnalysis };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runBundleAnalysis()
    .then(() => {
      console.log('\n✅ Bundle analysis completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Bundle analysis failed:', error);
      process.exit(1);
    });
}