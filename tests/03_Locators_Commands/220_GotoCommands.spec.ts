import { test, expect } from "@playwright/test";

test("Validate default goto commands", async ({ page }) => {
    await page.goto(("https://example.com"));

    let title = await page.title();
    console.log("Title: " + title);

    let url = await page.url();
    console.log("URL: " + url);

    let content = await page.content();
    console.log("Content: " + content);
    await expect(page).toHaveTitle("Example Domain");
    await expect(page).toHaveURL("https://example.com/");
    console.log("URL verified ✅");
});

test("Navigate with customer referre", async({ page }) => {
    await page.goto("https://example.com", { referer: "https://google.com" });
    console.log("Referer: " + page.evaluate(() => document.referrer));
    console.log("Title: " + page.title());
    console.log("URL: " + page.url());
    console.log("Content: " + page.content());
    await expect(page).toHaveTitle("Example Domain");
    await expect(page).toHaveURL("https://example.com/");
    console.log("URL verified ✅");
});