import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom'; // replace with target page

test.describe.serial('Shadow Dom', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);

    });

    test('locate Shadow DOM and assert visible', async ({ page }) => {
        const shadowHost = page.getByTestId('card-account');

        await shadowHost.getByPlaceholder('you@example.com').fill('test@gmail.com');
        await shadowHost.getByPlaceholder('••••••').fill('12345');

        await shadowHost.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByTestId('card-account-status')).toContainText('test@gmail.com');
    });
    test('locate Increment and decrement', async ({ page }) => {

        const cart = page.getByTestId('counter-cart');
        await cart.getByRole('button', { name: 'Increment' }).click();
        await cart.getByRole('button', { name: 'Increment' }).click();
        await expect(cart.getByTestId('counter-value')).toHaveText('5');


        //await expect(cart.getByTestId('counter-value')).toHaveValue(`${count}`);


    });

    test('locate Increment and decrement second approach', async ({ page }) => {
        const cart = page.getByTestId('counter-cart');
        const initialText = await cart.getByTestId('counter-value').innerText();
        let count = parseInt(initialText, 10)

        for (let i = 0; i < 10; i++) {
            // Reduced delay to a reasonable 100ms
            await cart.getByRole('button', { name: 'Increment' }).click({ delay: 100 });
            count++;

            // Fetch what the website actually displays right now
            const actualText = await cart.getByTestId('counter-value').innerText();
            console.log(`Loop ${i + 1}: Expected UI to be "${count}", but UI actually shows: "${actualText}"`);

            // This will still fail, but your console logs above will tell us exactly why
            await expect(cart.getByTestId('counter-value')).toHaveText(`${count}`);
        }
    });
    test('locate shadow inside shadow', async ({ page }) => {

        await page.getByTestId('nested-hostcard');
        await page.getByTestId('card-inside-email').fill('anc@email.com');
        await page.getByTestId('card-inside-password').fill('12111');
        //await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByTestId('card-inside-submit').click();
        await page.waitForTimeout(5000);

    });

});