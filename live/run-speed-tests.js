import { measurePerformance } from './performance-test.js';
import { runBundleAnalysis } from './bundle-analysis.js';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const execAsync = promisify(exec);

class SpeedTestRunner {
  constructor() {
    this.reportsDir = path.join(__dirname, 'performance-reports');
    this.testStartTime = Date.now();
  }

  async runAllTests() {
    console.log('🚀 Starting comprehensive speed test suite...\n');

    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }

    const results = {
      timestamp: new Date().toISOString(),
      testDuration: 0,
      tests: {
        playwright: null,
        lighthouse: null,
        bundle: null
      },
      summary: {},
      recommendations: []
    };

    try {
      // Check if dev server is running
      await this.checkDevServer();

      // Run Playwright performance tests
      console.log('🎭 Running Playwright performance tests...');
      results.tests.playwright = await this.runPlaywrightTests();
      
      // Run bundle analysis (requires build)
      console.log('📦 Running bundle analysis...');
      results.tests.bundle = await this.runBundleAnalysis();
      
      // Run Lighthouse tests
      console.log('🔍 Running Lighthouse tests...');
      results.tests.lighthouse = await this.runLighthouseTests();

      // Generate comprehensive summary
      results.summary = this.generateSummary(results.tests);
      results.recommendations = this.generateRecommendations(results.tests);
      results.testDuration = Date.now() - this.testStartTime;

      // Save comprehensive report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, `speed-test-comprehensive-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

      // Display results
      this.displayComprehensiveResults(results);
      
      console.log(`\n📁 Comprehensive report saved to: ${reportPath}`);

      return results;

    } catch (error) {
      console.error('❌ Speed test suite failed:', error.message);
      return null;
    }
  }

  async checkDevServer() {
    try {
      const response = await fetch('http://localhost:4324/minibrand-terkovezes/');
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      console.log('✅ Development server is running on http://localhost:4324/minibrand-terkovezes/\n');
    } catch (error) {
      throw new Error('❌ Development server is not running. Please start it with "npm run dev" first.');
    }
  }

  async runPlaywrightTests() {
    try {
      const playwrightResults = await measurePerformance();
      return {
        status: 'success',
        results: playwrightResults
      };
    } catch (error) {
      console.error('❌ Playwright tests failed:', error.message);
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async runBundleAnalysis() {
    try {
      // Build first
      console.log('  📋 Building project...');
      await execAsync('npm run build', { cwd: __dirname });
      
      const bundleResults = await runBundleAnalysis();
      return {
        status: 'success',
        results: bundleResults
      };
    } catch (error) {
      console.error('❌ Bundle analysis failed:', error.message);
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async runLighthouseTests() {
    try {
      console.log('  🔍 Running Lighthouse CI...');
      const { stdout, stderr } = await execAsync('npx lhci autorun', { cwd: __dirname });
      
      return {
        status: 'success',
        stdout,
        stderr
      };
    } catch (error) {
      // Lighthouse might fail but still provide useful output
      return {
        status: 'partial',
        error: error.message,
        stdout: error.stdout || '',
        stderr: error.stderr || ''
      };
    }
  }

  generateSummary(tests) {
    const summary = {
      overallStatus: 'unknown',
      metrics: {},
      scores: {}
    };

    // Playwright summary
    if (tests.playwright?.status === 'success') {
      const playwrightResults = tests.playwright.results;
      summary.metrics.playwright = {
        pagesTest: playwrightResults.summary?.totalPages || 0,
        averageLoadTime: playwrightResults.summary?.averageLoadTime || 0,
        passedThresholds: playwrightResults.summary?.pagesPassingThresholds || 0
      };
    }

    // Bundle summary
    if (tests.bundle?.status === 'success') {
      const bundleResults = tests.bundle.results;
      summary.metrics.bundle = {
        totalSizeMB: Math.round(bundleResults.totalSize / 1024 / 1024 * 100) / 100,
        jsSize: bundleResults.assets.js.totalSizeKB,
        cssSize: bundleResults.assets.css.totalSizeKB,
        imageSize: bundleResults.assets.images.totalSizeKB,
        pageCount: bundleResults.pages.count
      };
    }

    // Overall status
    const successfulTests = Object.values(tests).filter(test => test?.status === 'success').length;
    const totalTests = Object.keys(tests).length;
    
    if (successfulTests === totalTests) {
      summary.overallStatus = 'excellent';
    } else if (successfulTests >= totalTests * 0.7) {
      summary.overallStatus = 'good';
    } else {
      summary.overallStatus = 'needs-improvement';
    }

    return summary;
  }

  generateRecommendations(tests) {
    const recommendations = [];

    // Playwright recommendations
    if (tests.playwright?.status === 'success') {
      const avgLoadTime = tests.playwright.results.summary?.averageLoadTime || 0;
      if (avgLoadTime > 3000) {
        recommendations.push({
          type: 'warning',
          category: 'Performance',
          message: `Average load time is ${avgLoadTime}ms. Consider optimizing critical resources.`,
          priority: 'high'
        });
      }
    }

    // Bundle recommendations
    if (tests.bundle?.status === 'success') {
      const bundleResults = tests.bundle.results;
      if (bundleResults.totalSize > 3000000) { // 3MB
        recommendations.push({
          type: 'warning',
          category: 'Bundle Size',
          message: 'Total bundle size exceeds 3MB. Consider code splitting and asset optimization.',
          priority: 'high'
        });
      }

      if (bundleResults.assets.js.totalSizeKB > 500) {
        recommendations.push({
          type: 'info',
          category: 'JavaScript',
          message: 'JavaScript bundle is large. Consider lazy loading non-critical scripts.',
          priority: 'medium'
        });
      }
    }

    // General recommendations
    recommendations.push({
      type: 'info',
      category: 'Monitoring',
      message: 'Set up regular performance monitoring to track improvements over time.',
      priority: 'low'
    });

    return recommendations;
  }

  displayComprehensiveResults(results) {
    console.log('\n🏆 COMPREHENSIVE SPEED TEST RESULTS');
    console.log('=====================================');
    console.log(`Test Duration: ${Math.round(results.testDuration / 1000)}s`);
    console.log(`Overall Status: ${this.getStatusIcon(results.summary.overallStatus)} ${results.summary.overallStatus.toUpperCase()}\n`);

    // Test results
    Object.entries(results.tests).forEach(([testName, result]) => {
      const statusIcon = result?.status === 'success' ? '✅' : result?.status === 'partial' ? '⚠️' : '❌';
      console.log(`${statusIcon} ${testName.charAt(0).toUpperCase() + testName.slice(1)}: ${result?.status || 'unknown'}`);
    });

    // Metrics
    if (results.summary.metrics.playwright) {
      const pm = results.summary.metrics.playwright;
      console.log(`\n📊 Performance Metrics:`);
      console.log(`  Pages Tested: ${pm.pagesTest}`);
      console.log(`  Average Load Time: ${pm.averageLoadTime}ms`);
      console.log(`  Passed Thresholds: ${pm.passedThresholds}/${pm.pagesTest}`);
    }

    if (results.summary.metrics.bundle) {
      const bm = results.summary.metrics.bundle;
      console.log(`\n📦 Bundle Metrics:`);
      console.log(`  Total Size: ${bm.totalSizeMB}MB`);
      console.log(`  JavaScript: ${bm.jsSize}KB`);
      console.log(`  CSS: ${bm.cssSize}KB`);
      console.log(`  Images: ${bm.imageSize}KB`);
    }

    // Recommendations
    if (results.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS');
      console.log('==================');
      results.recommendations.forEach(rec => {
        const icon = rec.type === 'warning' ? '⚠️' : rec.type === 'error' ? '❌' : 'ℹ️';
        console.log(`${icon} [${rec.priority.toUpperCase()}] ${rec.category}: ${rec.message}`);
      });
    } else {
      console.log('\n✅ All performance metrics look great!');
    }
  }

  getStatusIcon(status) {
    switch (status) {
      case 'excellent': return '🎉';
      case 'good': return '✅';
      case 'needs-improvement': return '⚠️';
      default: return '❓';
    }
  }
}

// Export for use in other scripts
export { SpeedTestRunner };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const runner = new SpeedTestRunner();
  runner.runAllTests()
    .then((results) => {
      if (results) {
        console.log('\n🎯 Speed test suite completed successfully!');
        process.exit(0);
      } else {
        process.exit(1);
      }
    })
    .catch((error) => {
      console.error('❌ Speed test suite failed:', error);
      process.exit(1);
    });
}