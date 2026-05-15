import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Right Click', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    await page.locator('span.context-menu-one').first().click({
        button: 'right',
    });

    const allOptios = await page.locator('ul.context-menu-list span').allInnerTexts();
    console.log(allOptios);

    await page.getByText('Copy', { exact: true }).first().click();
    await page.waitForTimeout(5000);

    await page.locator('span.context-menu-one').first().click({
        button: 'right',
    });
    let poption: Locator = page.locator('.context-menu-item.is-disabled');
    //await expect( poption).toHaveClass(/context-menu-disabled/);
    await expect(poption).toHaveAttribute('aria-disabled', "true");
    // await expect(poption).toBeDisabled();
    await page.mouse.click(0, 0);
    await page.locator('h1').click({ button: 'right' });
    await expect(page.locator('ul.context-menu-list')).not.toBeVisible();
});