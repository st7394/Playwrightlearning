# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Hover, JS Alerts\Project7.spec.ts >> Hover, JS Alerts >> Hover Test 1
- Location: tests\Projects\Hover, JS Alerts\Project7.spec.ts:3:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('#output')
- Expected  - 1
+ Received  + 5

- Selected option Taxi
+ {
+   "clicked": "🚖\nTaxi",
+   "testId": "test-id-Taxi",
+   "at": "12:06:23 AM"
+ }

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#output')
    5 × locator resolved to <div id="output" class="submission-output" data-testid="hover-output">{↵  "clicked": "🚖\nTaxi",↵  "testId": "test-id-Ta…</div>
      - unexpected value "{
  "clicked": "🚖\nTaxi",
  "testId": "test-id-Taxi",
  "at": "12:06:23 AM"
}"

```

# Test source

```ts
  1  | import { test, expect, FrameLocator, Locator } from '@playwright/test';
  2  | test.describe('Hover, JS Alerts', () => {
  3  |     test('Hover Test 1', async ({ page }) => {
  4  |         //it registers the event 
  5  |         await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
  6  |         //await page.getByText('Add-ons', { exact: true }).hover();
  7  |         //await page.getByText('test-id-Taxi', { exact: true }).click();
  8  | 
  9  |         await page.getByTestId('nav-add-ons').hover();
  10 |         await page.getByTestId('test-id-Taxi').click();
  11 |         await page.waitForTimeout(5000);
  12 | 
  13 |         let response: Locator = page.locator('#output');
  14 |         await expect(response).toBeVisible();
> 15 |         expect(response).toHaveText('Selected option Taxi');
     |                          ^ Error: expect(locator).toHaveText(expected) failed
  16 | 
  17 | 
  18 |     });
  19 | });
```