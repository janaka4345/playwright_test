import { test, expect } from "@playwright/test";

test('has button', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a button with click me 
  await expect(page).toHaveTitle('Create Next App')
});