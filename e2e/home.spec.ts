import { test, expect } from '@playwright/test';

test('has react boilerplate', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Learn React')).toBeVisible();
});
