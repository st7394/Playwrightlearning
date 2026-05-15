import { test, expect } from '@playwright/test';
test('inspect paste', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    await page.locator('span.context-menu-one').first().click({ button: 'right' });
    const pasteHtml = await page.getByText('Paste', { exact: true }).first().evaluate(el => el.parentElement?.outerHTML);
    console.log("PASTE_HTML:", pasteHtml);
});
