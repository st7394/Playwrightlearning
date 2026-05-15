import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Keyboard', async ({ page }) => {

    await page.goto('https://keycode.info');
    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' });
    await page.keyboard.press('ArrowRight');
    await page.screenshot({ path: 'ArrowRight.png' });
    await page.keyboard.press('Enter');
    await page.screenshot({ path: 'Enter.png' });

    await page.keyboard.press('Shift+O');
    await page.screenshot({ path: 'Shift+O.png' });


    await page.keyboard.up("Shift");
    await page.keyboard.down("Shift");
    await page.waitForTimeout(5000);



})