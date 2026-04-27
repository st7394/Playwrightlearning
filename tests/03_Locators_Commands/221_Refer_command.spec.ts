import { test, expect } from "@playwright/test";

test("Validate refer command", async ({ browser }) => {
    let context = await browser.newContext({

        extraHTTPHeaders: {
            "Referrer": "https://google.com"
        }
    });

    let page = await context.newPage();
    await page.goto("https://thetestingacademy.com");
    console.log("Page 1 — partner referer included");

    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("Page 2 — partner referer included");
});