import { test, expect, Locator } from '@playwright/test';

const URL = 'https://selectorshub.com/xpath-practice-page/'; // replace with target page

const email ='test@email.com';
const password ='123111';

test.describe.serial('Shadow Dom', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);

    });

    test('locate Shadow DOM and assert visible', async ({ page }) => {
       
        await page.locator('#kils').fill('Myntra');
        await page.locator('#pizza').fill('Farmhouse');

        await page.keyboard.press('Tab');
        await page.keyboard.type('Test', {delay:100});
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('Testing', {delay:100});
      //  await expect(page.locator('#password')).toBeVisible();
        await expect(page.locator(':focus')).toHaveValue('Testing');


        await page.waitForTimeout(5000);

        
    });   
});