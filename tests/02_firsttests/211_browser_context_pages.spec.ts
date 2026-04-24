import { chromium, Browser, BrowserContext, Page } from "playwright";

async function run() {
    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser is launched");
    let context: BrowserContext = await browser.newContext();
    console.log("Browser context is launched");
    let page: Page = await context.newPage();
    await page.goto("https://playwright.dev/");
    //await expect(page).toHaveTitle("Playwright");
}

run();