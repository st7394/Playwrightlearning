import { test, expect } from "@playwright/test";

test("first test", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle("Playwright");
    const button = page.locator("a.get-started");
    await expect(button).toBeVisible();
    await button.click();
    await expect(page).toHaveURL("https://playwright.dev/docs/intro");
});

test.skip('Verify VWO TC', async ({ page }) => {

    await page.goto('https://app.vwo.com');

    await expect(page).toHaveTitle('Login - VWO');

    const img_vwo = page.locator('img');

    await expect(img_vwo).toBeVisible();



});