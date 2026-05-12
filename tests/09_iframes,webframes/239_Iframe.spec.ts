import { test, expect, FrameLocator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    let frame1: FrameLocator = page.frameLocator('#frame-one');

    await frame1.locator("#RESULT_TextField-1").fill('Hyundai');
    await frame1.locator("#RESULT_TextField-2").fill("Saumitra");

    await frame1.locator('#RESULT_TextField-3').fill('2012');
    await frame1.locator('#RESULT_RadioButton-1').selectOption('Hatchback');
    await frame1.locator('#RESULT_TextField-4').fill('2015');

    await frame1.locator('#RESULT_TextArea-1').fill('Amazing car with amazing family car in a budget');

    await frame1.getByText('Submit registration', { exact: true }).click();

    let outputresponse = await frame1.locator('#vehicle-output').innerText();
    
    console.log(outputresponse);
    

    })

    