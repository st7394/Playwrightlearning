import { test, expect } from "@playwright/test";

test("Cura login", async ({ page }) => {

    let username = "John Doe";
    let password = "ThisIsNotAPassword";
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await page.locator("#btn-make-appointment").click();
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    await page.locator("#txt-username").fill(username);
    await page.locator("#txt-password").fill(password);
    await page.locator("#btn-login").click();
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
});