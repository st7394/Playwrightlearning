import { test, expect } from "@playwright/test";


test("Invalid VMO login .Validate by role", async ({ page }) => {

    let username = "abc@email.com";
    let password = "ThisIsNotAPassword";
    await page.goto("https://app.vwo.com/#login");
    await expect(page).toHaveTitle("Login - VWO");

    let emailId = page.getByRole("textbox", { name: "Email address" });
    let passwordId = page.getByRole("textbox", { name: "Password" });
    let signInButton = page.getByRole("button", { name: "Sign in", exact: true });
    await emailId.fill(username);
    await passwordId.fill(password);
    await signInButton.click();
    let error_message = page.locator("#js-notification-box-msg");
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

});
