import { test, expect, Page, Locator } from '@playwright/test';

test.describe('totals calculator', () => {
  async function fillForm(page: Page) {
    await page.getByLabel('Flour (grams)').fill('500');
    await page.getByLabel('Water (grams)').fill('335');
    await page.getByLabel('Starter (grams)').fill('125');
  }

  let totalsList: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    totalsList = page.locator("//*[contains(@aria-label, 'Totals')]");
    await expect(totalsList).toBeVisible();
  });

  test('shows the inputs in the totals', async ({ page }) => {
    const flourTotal = 'Flour:500g';
    const waterTotal = 'Water:335g';
    const starterTotal = 'Starter:125g';

    await expect(totalsList).not.toContainText(flourTotal);
    await expect(totalsList).not.toContainText(waterTotal);
    await expect(totalsList).not.toContainText(starterTotal);

    await fillForm(page);

    await expect(totalsList.getByText(flourTotal)).toBeVisible();
    await expect(totalsList.getByText(waterTotal)).toBeVisible();
    await expect(totalsList.getByText(starterTotal)).toBeVisible();
  });

  test('shows the calculated results', async ({ page }) => {
    const hydrationResult = 'Hydration:75%';
    const saltTotal = 'Salt:10g';

    await expect(totalsList).not.toContainText(hydrationResult);
    await expect(totalsList).not.toContainText(saltTotal);

    await fillForm(page);

    await expect(totalsList.getByText(hydrationResult)).toBeVisible();
    await expect(totalsList.getByText(saltTotal)).toBeVisible();
  });
});
