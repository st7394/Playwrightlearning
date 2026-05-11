import { test, expect } from '@playwright/test';

test('Basic Dropdown', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    await page.locator('//div[@data-testid="dropdown-language"]').click();
    await page.getByText('Java', { exact: true }).click();
    // await page.waitForTimeout(5000);

    await expect(page.locator('//div[@data-testid="dropdown-language"]')).toContainText('Java');

    await page.locator('//div[@id="experience-shell"]').click();
    await page.getByText('Mid-level (4-6 years)', { exact: true }).click();
    await page.locator('//div[@id="framework-shell"]').click();
    await page.getByText('Next.js', { exact: true }).click();

    await expect(page.locator('//div[@id="framework-shell"]')).toContainText('Next.js');
    await expect(page.locator('//div[@id="experience-shell"]')).toContainText('Mid-level (4-6 years)');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Save selection', exact: true }).click();
    await page.waitForTimeout(5000);



})