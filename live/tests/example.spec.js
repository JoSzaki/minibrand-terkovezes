// @ts-check
import { test, expect } from '@playwright/test';

test('basic playwright functionality', async ({ page }) => {
  // Test basic functionality without requiring local server
  await page.goto('https://example.com');
  
  // Check that we can interact with the page
  await expect(page).toHaveTitle('Example Domain');
  
  // Check that we can find elements
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  
  console.log('✅ Playwright MCP is working correctly!');
});