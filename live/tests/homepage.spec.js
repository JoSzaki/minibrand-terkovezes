// @ts-check
import { test, expect } from '@playwright/test';

test('homepage loads and displays key elements', async ({ page }) => {
  await page.goto('/');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Check that the page title contains expected text
  await expect(page).toHaveTitle(/Térkő|Minibrand/);
  
  // Check that main content is visible
  const main = page.locator('main');
  await expect(main).toBeVisible();
  
  // Check for footer
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
});

test('navigation menu works', async ({ page }) => {
  await page.goto('/');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Check if navigation elements are present
  const nav = page.locator('nav');
  await expect(nav).toBeVisible();
  
  // Test mobile menu button if present
  const mobileMenuButton = page.locator('[data-collapse-toggle]');
  if (await mobileMenuButton.isVisible()) {
    await mobileMenuButton.click();
    // Check if mobile menu opens
    const mobileMenu = page.locator('.mobile-menu, [data-collapse-show="true"]');
    await expect(mobileMenu).toBeVisible();
  }
});