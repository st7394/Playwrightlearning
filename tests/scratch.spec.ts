import { test } from "@playwright/test";
test("test", async ({page}) => {
    const usernamefield = page.locator("#username");
    await usernamefield fill("abc");
});
