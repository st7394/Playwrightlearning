import { test, expect, FrameLocator, Locator } from '@playwright/test';
test.describe('Hover, JS Alerts', () => {
    test('Hover Test 1', async ({ page }) => {
        //it registers the event 
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
        //await page.getByText('Add-ons', { exact: true }).hover();
        //await page.getByText('test-id-Taxi', { exact: true }).click();

        await page.getByTestId('nav-add-ons').hover();
        await page.getByTestId('test-id-Taxi').click();
        await page.waitForTimeout(5000);

        let response: Locator = page.locator('#output');
        await expect(response).toBeVisible();
        expect(response).toContainText('Taxi');

    });
});