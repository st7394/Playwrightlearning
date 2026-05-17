import { test, expect, Locator } from "@playwright/test";

const SimpleMaps = "https://simplemaps.com/svg/country/in";


test.describe("Map Selection", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(SimpleMaps);
    });

    test("Generate the list of all states in India", async ({ page }) => {

        const states: Locator[] = await page.locator('svg>path').all();
        console.log(states.length);

        for (const state of states) {

            console.log(await state.getAttribute('title'));
            if (await state.getAttribute('title') == 'Uttar Pradesh')
                await state.click();
            //await page.waitForTimeout(3000);

        }

    });
});