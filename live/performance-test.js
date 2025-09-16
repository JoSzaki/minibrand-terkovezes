import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test configuration
const BASE_URL = 'http://localhost:4324/minibrand-terkovezes';
const PAGES_TO_TEST = [
  { name: 'Homepage', path: '/' },
  { name: 'Kocsibeálló Térkövezés', path: '/kocsibeallo-terkovezes/' },
  { name: 'Terasz Térkövezés', path: '/terasz-terkovezes/' },
  { name: 'Kert és Járda Térkövezés', path: '/kert-jarda-terkovezes/' },
  { name: 'Blog Listing', path: '/blog/' },
  { name: 'Kapcsolat', path: '/kapcsolat/' },
  { name: 'Árak', path: '/arak/' },
  { name: 'Referenciák', path: '/referenciak/' }
];

// Performance thresholds (in milliseconds)
const THRESHOLDS = {
  FCP: 1800,        // First Contentful Paint
  LCP: 2500,        // Largest Contentful Paint  
  TTFB: 600,        // Time to First Byte
  DOMContentLoaded: 2000,
  Load: 3000
};

async function measurePerformance() {
  console.log('🚀 Starting performance tests...\n');
  
  // Launch browser
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });

  const results = [];
  
  for (const page of PAGES_TO_TEST) {
    console.log(`📊 Testing: ${page.name}`);
    
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    
    const browserPage = await context.newPage();
    
    // Enable request interception to measure resource loading
    const resourceMetrics = {
      requests: 0,
      totalSize: 0,
      jsSize: 0,
      cssSize: 0,
      imageSize: 0
    };
    
    browserPage.on('response', async (response) => {
      resourceMetrics.requests++;
      const contentLength = response.headers()['content-length'];
      const size = contentLength ? parseInt(contentLength) : 0;
      resourceMetrics.totalSize += size;
      
      const contentType = response.headers()['content-type'] || '';
      if (contentType.includes('javascript')) {
        resourceMetrics.jsSize += size;
      } else if (contentType.includes('css')) {
        resourceMetrics.cssSize += size;
      } else if (contentType.includes('image')) {
        resourceMetrics.imageSize += size;
      }
    });

    try {
      // Start timing
      const startTime = Date.now();
      
      // Navigate and collect performance metrics
      await browserPage.goto(`${BASE_URL}${page.path}`, {
        waitUntil: 'networkidle',
        timeout: 30000
      });
      
      const endTime = Date.now();
      
      // Get performance metrics using Chrome DevTools Protocol
      const performanceMetrics = await browserPage.evaluate(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        const paintEntries = performance.getEntriesByType('paint');
        
        return {
          // Navigation timing
          TTFB: perfData.responseStart - perfData.requestStart,
          DOMContentLoaded: perfData.domContentLoadedEventEnd - perfData.navigationStart,
          Load: perfData.loadEventEnd - perfData.navigationStart,
          
          // Paint timing
          FCP: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          
          // Additional metrics
          transferSize: perfData.transferSize || 0,
          encodedBodySize: perfData.encodedBodySize || 0,
          decodedBodySize: perfData.decodedBodySize || 0
        };
      });

      // Measure LCP using Web Vitals
      const webVitals = await browserPage.evaluate(() => {
        return new Promise((resolve) => {
          let lcpValue = 0;
          let clsValue = 0;
          
          // LCP observer
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            lcpValue = entries[entries.length - 1].startTime;
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
          
          // CLS observer
          let clsScore = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                clsScore += entry.value;
              }
            }
            clsValue = clsScore;
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
          
          // Wait a bit for metrics to stabilize
          setTimeout(() => {
            lcpObserver.disconnect();
            clsObserver.disconnect();
            resolve({
              LCP: lcpValue,
              CLS: clsValue
            });
          }, 3000);
        });
      });

      const pageResult = {
        page: page.name,
        path: page.path,
        timestamp: new Date().toISOString(),
        totalTime: endTime - startTime,
        metrics: {
          ...performanceMetrics,
          ...webVitals
        },
        resources: resourceMetrics,
        status: 'success',
        thresholdsPassed: {
          FCP: performanceMetrics.FCP <= THRESHOLDS.FCP,
          LCP: webVitals.LCP <= THRESHOLDS.LCP,
          TTFB: performanceMetrics.TTFB <= THRESHOLDS.TTFB,
          DOMContentLoaded: performanceMetrics.DOMContentLoaded <= THRESHOLDS.DOMContentLoaded,
          Load: performanceMetrics.Load <= THRESHOLDS.Load
        }
      };

      results.push(pageResult);
      
      // Log results for this page
      console.log(`  ⏱️  Total Time: ${pageResult.totalTime}ms`);
      console.log(`  🎨 FCP: ${Math.round(performanceMetrics.FCP)}ms (${pageResult.thresholdsPassed.FCP ? '✅' : '❌'})`);
      console.log(`  📦 LCP: ${Math.round(webVitals.LCP)}ms (${pageResult.thresholdsPassed.LCP ? '✅' : '❌'})`);
      console.log(`  🌐 TTFB: ${Math.round(performanceMetrics.TTFB)}ms (${pageResult.thresholdsPassed.TTFB ? '✅' : '❌'})`);
      console.log(`  📊 Requests: ${resourceMetrics.requests}`);
      console.log(`  💾 Total Size: ${Math.round(resourceMetrics.totalSize / 1024)}KB`);
      console.log(`  📱 CLS: ${webVitals.CLS.toFixed(3)}\n`);
      
    } catch (error) {
      console.error(`❌ Error testing ${page.name}:`, error.message);
      results.push({
        page: page.name,
        path: page.path,
        timestamp: new Date().toISOString(),
        status: 'error',
        error: error.message
      });
    }
    
    await context.close();
  }
  
  await browser.close();
  
  // Generate summary report
  const summary = generateSummary(results);
  
  // Save detailed results
  const reportsDir = path.join(__dirname, 'performance-reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = path.join(reportsDir, `performance-${timestamp}.json`);
  
  const fullReport = {
    timestamp: new Date().toISOString(),
    testConfig: {
      baseUrl: BASE_URL,
      thresholds: THRESHOLDS,
      pagesCount: PAGES_TO_TEST.length
    },
    summary,
    results
  };
  
  fs.writeFileSync(reportPath, JSON.stringify(fullReport, null, 2));
  
  console.log('\n📋 PERFORMANCE SUMMARY');
  console.log('=====================');
  console.log(`Total pages tested: ${summary.totalPages}`);
  console.log(`Successful tests: ${summary.successfulTests}`);
  console.log(`Failed tests: ${summary.failedTests}`);
  console.log(`Average load time: ${summary.averageLoadTime}ms`);
  console.log(`Pages passing all thresholds: ${summary.pagesPassingThresholds}/${summary.totalPages}`);
  console.log(`\n📁 Detailed report saved to: ${reportPath}`);
  
  return fullReport;
}

function generateSummary(results) {
  const successfulResults = results.filter(r => r.status === 'success');
  const failedResults = results.filter(r => r.status === 'error');
  
  let totalLoadTime = 0;
  let pagesPassingThresholds = 0;
  
  successfulResults.forEach(result => {
    totalLoadTime += result.totalTime;
    
    const allThresholdsPassed = Object.values(result.thresholdsPassed || {}).every(passed => passed);
    if (allThresholdsPassed) {
      pagesPassingThresholds++;
    }
  });
  
  return {
    totalPages: results.length,
    successfulTests: successfulResults.length,
    failedTests: failedResults.length,
    averageLoadTime: successfulResults.length > 0 ? Math.round(totalLoadTime / successfulResults.length) : 0,
    pagesPassingThresholds
  };
}

// Run the performance test
if (import.meta.url === `file://${process.argv[1]}`) {
  measurePerformance()
    .then(() => {
      console.log('\n✅ Performance testing completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Performance testing failed:', error);
      process.exit(1);
    });
}

export { measurePerformance };
