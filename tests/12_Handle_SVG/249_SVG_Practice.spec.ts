import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg'; // replace with target page

test.describe.serial('SVG handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });


    test('Interact with SVG using keyboard navigation', async ({ page }) => {

        const circleshape: Locator = page.locator('#circle-blue');
        await expect(circleshape).toBeVisible();

        await circleshape.click();
        await expect(circleshape).toHaveClass(/is-selected/);

        const outputContainer: string = await page.getByTestId("shapes-output").innerText();
        expect(outputContainer).toContain('"id": "circle-blue"');

    });

    test('Interact with bar svg', async ({ page }) => {
        await page.getByRole('button', { name: /Q3 bar/ }).click();

        await page.getByRole('radio', { name: '4 stars' }).click();

        await page.waitForTimeout(5000);
    });

    test('Iterate over all bars', async ({ page }) => {

        let allBars = await page.locator('.bar').all();

        for (const bar of allBars) {
            const q = await bar.getAttribute('data-quarter');
            // if....
            await bar.click();
            console.log(q);
        }
    }
    )



});

