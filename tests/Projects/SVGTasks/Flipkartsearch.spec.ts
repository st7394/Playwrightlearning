import { test, expect, Locator } from "@playwright/test";

const flipkartUrl = "https://www.flipkart.com/";

test.describe("Flipkart Search", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(flipkartUrl);
        
    })

    test("Search for a product", async ({ page }) => {

        const closeButton = page.getByRole('button', { name: '✕', exact: true });
        await closeButton.waitFor({ state: 'visible', timeout: 3000 });
        await closeButton.click();

        await page.getByPlaceholder('Search for products, brands and more').first().fill('macmini');
        const svgele: Locator = page.locator('svg');
        await svgele.first().click();

        await page.waitForTimeout(5000);

        await page.locator('.WNv7PR', { hasText: 'Price -- Low to High' }).click();
        await page.waitForLoadState('networkidle');

        await page.waitForTimeout(5000);

        // Fixed TypeScript type casing from String to string
        const productLink: string | null = await page.locator("//a[contains(text(), 'Apple Mac Mini (MXNF2HN/A) Core i3')]").getAttribute('href');
        console.log('Product link: ' + productLink);

        // Fixed TypeScript type casing from String to string
        const prouctprice: string | null = await page.locator("//a[contains(. ,'₹69,990')]").textContent();
        console.log('Product price: ' + prouctprice);
    });
});