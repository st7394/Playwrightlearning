# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 10_Keyboard_Hover_Drag_Drop\242_Keyboard.spec.ts >> Keyboard
- Location: tests\10_Keyboard_Hover_Drag_Drop\242_Keyboard.spec.ts:3:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect, FrameLocator, Locator } from '@playwright/test';
  2  | 
  3  | test('Keyboard', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://keycode.info');
  6  |     await page.keyboard.press('A');
  7  |     await page.screenshot({ path: 'A.png' });
  8  |     await page.keyboard.press('ArrowRight');
  9  |     await page.screenshot({ path: 'ArrowRight.png' });
  10 |     await page.keyboard.press('Enter');
  11 |     await page.screenshot({ path: 'Enter.png' });
  12 | 
  13 |     await page.keyboard.press('Shift+O');
  14 |     await page.screenshot({ path: 'Shift+O.png' });
  15 | 
  16 | 
  17 |     await page.keyboard.up("Shift");
  18 |     await page.keyboard.down("Shift");
> 19 |     await page.waitForTimeout(5000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  20 | 
  21 | 
  22 | 
  23 | })
```