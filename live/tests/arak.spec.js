// @ts-check
import { test, expect } from '@playwright/test';

test('arak page loads correctly', async ({ page }) => {
  await page.goto('/arak');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Check that the page title contains expected text
  await expect(page).toHaveTitle(/Árak|Térkő|Minibrand/);
  
  // Check that main content is visible
  const main = page.locator('main');
  await expect(main).toBeVisible();
  
  // Check for pricing information
  const pricingContent = page.locator('text=/ár|Ft|forint/i');
  await expect(pricingContent).toBeVisible();
});