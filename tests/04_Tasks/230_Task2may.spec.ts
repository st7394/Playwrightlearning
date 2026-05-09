import { test, expect } from '@playwright/test'

test("Validate balance on dashboard", async ({ page }) => {
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await page.getByPlaceholder('John Doe').fill('Saumitra');
    await page.getByPlaceholder('you@example.com').fill('abc@gmail.com');
    await page.getByRole('textbox', { name: '••••••••' }).fill('1234567890');

    await page.getByRole('button', { name: 'Create Account' }).click();

    // Use .last() to get the innermost div that contains "Total Balance"
    const balanceCard = page.locator('div').filter({ hasText: 'Total Balance' }).last();
    const intialbalance = await balanceCard.innerText();
    console.log(`Total Balance is -: ${intialbalance}`);

    await page.getByRole('button', { name: 'Transfer Funds' }).click();
    //await page.getByRole('textbox',{name:'0.00'}).fill('10000');

    await page.getByPlaceholder('0.00').fill('10000');

    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    // Wait for the next state to load
    await page.getByRole('button', { name: 'Confirm Transfer', exact: true }).waitFor({ state: 'visible' });
    await page.getByRole('button', { name: 'Confirm Transfer', exact: true }).click();
    await page.getByRole('button',{name:'Dashboard',exact:true}).click();


    const newbalance = page.locator('div').filter({ hasText: 'Total Balance' }).last();
    const finalbalance = await newbalance.locator('h3').innerText();
    console.log(`New Balance is -: ${finalbalance}`);
    expect(finalbalance).toBe('$40,000.00');



})