import { test, expect, FrameLocator, Locator } from '@playwright/test';

test.describe('Javascript alerts', () => {

    test.beforeEach(async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    })

    test('JS Alert accept 1',async({page})=>{
        //it registers the event 
        page.once('dialog',async dialog =>{
            
            console.log(`Type :${dialog.type()}`);
            expect(dialog.type()).toBe('alert');
            console.log(`Message: ${dialog.message()}`);
            expect(dialog.message()).toContain("I am a JS Alert");
            await dialog.accept();
        })

         await page.getByRole('button', { name: "Click for JS Alert" }).click();
         
         await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
    })

    test('JS Alert accept 2',async({page})=>{

         page.once('dialog',async dialog =>{
            
            console.log(`Type :${dialog.type()}`);
            expect(dialog.type()).toBe('confirm');
            console.log(`Message: ${dialog.message()}`);
            expect(dialog.message()).toContain("I am a JS Confirm");
            await dialog.accept();
        })

        await page.locator('button', { hasText: 'Click for JS Confirm' }).click();
        
    })

    test('JS Alert accept 3',async({page})=>{
        
        const  txtbox = 'Hello from The Testing Academy';

        page.once('dialog',async dialog =>{
            console.log(`Type :${dialog.type()}`);
            expect(dialog.type()).toBe('prompt');
            expect (dialog.defaultValue()).toBe('');
            await dialog.accept(txtbox);
        })
        await page.locator('button', { hasText: 'Click for JS Prompt' }).click();
    })
})