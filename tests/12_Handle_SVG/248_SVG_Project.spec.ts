import { test, expect, Locator } from '@playwright/test';

const URL ='https://www.flipkart.com/search';

test.describe('SVG Elements Handling', () => {

    test.beforeEach(async({page})=>{
        await page.goto(URL);
    });

    test('Locate SVG Element', async ({ page }) => {
        
       await page.getByPlaceholder('Search for products, brands and more').first().fill('macmini');
       const svgele:Locator = page.locator('svg');
       await svgele.first().click();

       await page.waitForTimeout(5000);

       const svgalleles: Locator[] = await page.locator('svg').all();
       console.log('Number of SVGs found: ' + svgalleles.length);
       
       const firstResult: Locator = page.locator('//div[contains(@data-id,"CPU")]/div/a[2]');
       await expect(firstResult.first()).toBeVisible({timeout:5000});

       const secondResult: Locator[] = await page.locator('//div[contains(@data-id,"CPU") or contains(@data-id,"MP") or contains(@data-id,"AI")]/div/a[2]').all();
       console.log('Total Results ' + secondResult.length);

       for(const ele of secondResult){
        console.log('Element is ' + await ele.innerText());
       }
        
    });

});
