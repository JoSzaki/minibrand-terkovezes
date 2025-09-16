import { chromium } from 'playwright';

async function quickPerformanceTest() {
  console.log('🚀 Running quick performance test...\n');
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    const startTime = Date.now();
    await page.goto('http://localhost:4324/', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    const loadTime = Date.now() - startTime;
    
    // Get performance metrics
    const metrics = await page.evaluate(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      const paintEntries = performance.getEntriesByType('paint');
      
      return {
        TTFB: Math.round(perfData.responseStart - perfData.requestStart),
        DOMContentLoaded: Math.round(perfData.domContentLoadedEventEnd - perfData.navigationStart),
        Load: Math.round(perfData.loadEventEnd - perfData.navigationStart),
        FCP: Math.round(paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0),
        transferSize: Math.round((perfData.transferSize || 0) / 1024)
      };
    });
    
    console.log('📊 PERFORMANCE RESULTS');
    console.log('======================');
    console.log(`⏱️  Total Load Time: ${loadTime}ms`);
    console.log(`🌐 TTFB: ${metrics.TTFB}ms`);
    console.log(`📱 FCP: ${metrics.FCP}ms`);
    console.log(`📋 DOM Ready: ${metrics.DOMContentLoaded}ms`);
    console.log(`✅ Full Load: ${metrics.Load}ms`);
    console.log(`💾 Transfer Size: ${metrics.transferSize}KB`);
    
    // Performance assessment
    const assessment = [];
    if (metrics.TTFB > 600) assessment.push('⚠️  TTFB is high');
    if (metrics.FCP > 1800) assessment.push('⚠️  FCP is slow');
    if (metrics.Load > 3000) assessment.push('⚠️  Load time is slow');
    
    if (assessment.length === 0) {
      console.log('\n✅ Performance looks good!');
    } else {
      console.log('\n💡 Performance recommendations:');
      assessment.forEach(rec => console.log(`  ${rec}`));
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
  
  await browser.close();
}

quickPerformanceTest();
