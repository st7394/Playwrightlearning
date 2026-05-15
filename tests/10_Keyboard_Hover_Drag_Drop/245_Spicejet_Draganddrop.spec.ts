import { test, expect, FrameLocator, Locator } from '@playwright/test';


test('Drag and drop', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    const columnA = page.locator("#column-a");
    const columnB = page.locator("#column-b");

    await expect(columnA).toContainText("A");
    await expect(columnB).toContainText("B");

    await columnA.dragTo(columnB);
    await page.waitForTimeout(5000);

    await expect(columnA).toContainText("B");
    await expect(columnB).toContainText("A");

});