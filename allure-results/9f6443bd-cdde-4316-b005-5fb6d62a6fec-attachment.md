# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_JS_Alerts\243_JS_Alerts.spec.ts >> Javascript alerts >> JS Alert accept 3
- Location: tests\11_JS_Alerts\243_JS_Alerts.spec.ts:40:9

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "I am a JS Prompt"
Received string:    "I am a JS prompt"
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('button').filter({ hasText: 'Click for JS Prompt' })
    - locator resolved to <button onclick="jsPrompt()">Click for JS Prompt</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | import { test, expect, FrameLocator, Locator } from '@playwright/test';
  2  | 
  3  | test.describe('Javascript alerts', () => {
  4  | 
  5  |     test.beforeEach(async({page})=>{
  6  |         await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  7  |     })
  8  | 
  9  |     test('JS Alert accept 1',async({page})=>{
  10 |         //it registers the event 
  11 |         page.once('dialog',async dialog =>{
  12 |             
  13 |             console.log(`Type :${dialog.type()}`);
  14 |             expect(dialog.type()).toBe('alert');
  15 |             console.log(`Message: ${dialog.message()}`);
  16 |             expect(dialog.message()).toContain("I am a JS Alert");
  17 |             await dialog.accept();
  18 |         })
  19 | 
  20 |          await page.getByRole('button', { name: "Click for JS Alert" }).click();
  21 |          
  22 |          await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
  23 |     })
  24 | 
  25 |     test('JS Alert accept 2',async({page})=>{
  26 | 
  27 |          page.once('dialog',async dialog =>{
  28 |             
  29 |             console.log(`Type :${dialog.type()}`);
  30 |             expect(dialog.type()).toBe('confirm');
  31 |             console.log(`Message: ${dialog.message()}`);
  32 |             expect(dialog.message()).toContain("I am a JS Confirm");
  33 |             await dialog.accept();
  34 |         })
  35 | 
  36 |         await page.locator('button', { hasText: 'Click for JS Confirm' }).click();
  37 |         
  38 |     })
  39 | 
  40 |     test('JS Alert accept 3',async({page})=>{
  41 |         
  42 |         const  txtbox = 'Hello from The Testing Academy';
  43 | 
  44 |         page.once('dialog',async dialog =>{
  45 |             console.log(`Type :${dialog.type()}`);
  46 |             expect(dialog.type()).toBe('prompt');
  47 |             console.log(`Message: ${dialog.message()}`);
  48 |             expect(dialog.message()).toContain("I am a JS Prompt");
  49 |             await dialog.accept(txtbox);
  50 |         })
> 51 |         await page.locator('button', { hasText: 'Click for JS Prompt' }).click();
     |                                                                          ^ Error: locator.click: Test ended.
  52 |     })
  53 | })
```