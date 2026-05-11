import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

test('QA manual form fill', async ({ page }) => {
    // Allure report metadata
    await allure.description('Fill the QA Profile Form and validate JSON output');
    await allure.feature('QA Form Fill');
    await allure.severity('critical');
    await allure.owner('Saumitra Tripathi');

    await allure.step('Navigate to QA Profile Form', async () => {
        await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
        //await expect(page.locator('h1')).toContainText('QA Prodile');
    });

    await allure.step('Fill text inputs - First Name & Last Name', async () => {
        await page.getByRole('textbox', { name: 'First Name' }).fill('Saumitra');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Tripathi');
    });

    await allure.step('Select Gender radio button', async () => {
        const maleRadio = page.getByTestId("gender-male");
        await maleRadio.check();
        await expect(maleRadio).toBeChecked();
    });

    const today = new Date();

    await allure.step('Fill dropdown and date fields', async () => {
        await page.locator("#years-experience").selectOption('7');
        await page.getByTestId('profile-date').fill(today.toISOString().split('T')[0]);
    });

    await allure.step('Select Profession radio button', async () => {
        // const prf = page.getByRole('radiogroup', { name: 'Profession' });
        await page.getByRole('radio', { name: 'Automation Tester' }).check();
    });

    await allure.step('Check Automation Tools checkboxes', async () => {
        await page.getByTestId('tool-selenium').check();
        await page.getByTestId('tool-uft').check();
    });

    await allure.step('Check Continent checkboxes', async () => {
        await page.getByTestId('continent-asia').check();
        await page.getByTestId('continent-europe').check();
        await page.getByTestId('continent-north-america').check();
    });

    await allure.step('Submit the form', async () => {
        await page.getByRole("button", { name: "Save profile" }).click();
    });

    await allure.step('Validate JSON output', async () => {
        const response = await page.locator("#submission-output");
        expect(response).toBeVisible();

        await expect(response).toContainText('"firstName": "Saumitra"');
        await expect(response).toContainText('"lastName": "Tripathi"');
        await expect(response).toContainText('"gender": "Male"');
        await expect(response).toContainText('"yearsExperience": "7"');
        await expect(response).toContainText(`"date": "${today.toISOString().split('T')[0]}"`);
    });

})
