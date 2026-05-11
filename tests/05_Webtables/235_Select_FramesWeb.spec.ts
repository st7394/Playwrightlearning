import { test, expect } from "@playwright/test";

test('Select Dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    await page.locator("#dropdown").click();
    //await page.getByText('Option 1',{exact:true}).click();
    //direct selectoptions are discouraged as they were created for static select boxes.
    await page.locator("#dropdown").selectOption("Option 1");

    expect(page.locator("#dropdown")).toContainText("Option 1");
    await page.waitForTimeout(5000);


})