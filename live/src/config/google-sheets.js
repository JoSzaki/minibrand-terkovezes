// Google Sheets Configuration
// Replace this URL with your actual Google Apps Script Web App URL

export const GOOGLE_SHEETS_CONFIG = {
    // Your Google Apps Script Web App URL goes here
    // Example: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
    url: 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE',

    // Enable/disable Google Sheets integration for testing
    enabled: true,

    // Fallback behavior when Google Sheets is disabled
    fallbackBehavior: 'alert' // 'alert' or 'console'
};

// For development/testing, you can disable the integration
// export const GOOGLE_SHEETS_CONFIG = {
//     url: '',
//     enabled: false,
//     fallbackBehavior: 'alert'
// };