import { test, expect, Locator } from '@playwright/test';
import * as path from 'path';

const URL = 'https://the-internet.herokuapp.com/upload'; // replace with target page

test.describe('File Upload', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate FileUpload and upload', async ({ page }) => {

        const filepath = path.join(__dirname, 'testdata.txt');
        console.log('File path:', filepath);

        await page.locator('#file-upload').setInputFiles(filepath);
        await page.waitForTimeout(5000);
        await page.getByRole("button", { name: "Upload" }).click();
        await page.waitForTimeout(5000);

        await expect(page.locator('#uploaded-files')).toContainText('testdata.txt');


    })

})