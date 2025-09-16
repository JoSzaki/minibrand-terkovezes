export default {
  ci: {
    collect: {
      // Test against localhost development server
      url: [
        'http://localhost:4324/',
        'http://localhost:4324/kocsibeallo-terkovezes/',
        'http://localhost:4324/terasz-terkovezes/',
        'http://localhost:4324/kert-jarda-terkovezes/',
        'http://localhost:4324/blog/',
        'http://localhost:4324/kapcsolat/',
        'http://localhost:4324/arak/',
        'http://localhost:4324/referenciak/'
      ],
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
        preset: 'desktop',
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1
        }
      }
    },
    assert: {
      assertions: {
        // Performance thresholds
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        
        // Core Web Vitals
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'max-potential-fid': ['error', { maxNumericValue: 130 }],
        
        // Resource optimization
        'total-byte-weight': ['warn', { maxNumericValue: 1000000 }], // 1MB
        'unused-javascript': ['warn', { maxNumericValue: 50000 }],   // 50KB
        'unused-css-rules': ['warn', { maxNumericValue: 20000 }],    // 20KB
        
        // Image optimization
        'uses-optimized-images': 'error',
        'modern-image-formats': 'warn',
        'uses-responsive-images': 'warn',
        
        // Font optimization
        'font-display': 'error',
        'preload-fonts': 'warn'
      }
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-reports'
    }
  }
};
