# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 10_Keyboard_Hover_Drag_Drop\244_Spicejet_Draganddrop.spec.ts >> Drag and drop
- Location: tests\10_Keyboard_Hover_Drag_Drop\244_Spicejet_Draganddrop.spec.ts:4:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#column-a')
Expected substring: "a"
Received string:    "A"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#column-a')
    8 × locator resolved to <div id="column-a" class="column" draggable="true">…</div>
      - unexpected value "A"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "Drag and Drop" [level=3] [ref=e8]
      - generic:
        - banner [ref=e10]: A
        - banner [ref=e12]: B
  - generic [ref=e14]:
    - separator [ref=e15]
    - generic [ref=e16]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e17] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import { test, expect, FrameLocator, Locator } from '@playwright/test';
  2  | 
  3  | 
  4  | test('Drag and drop',async({page}) =>{
  5  | 
  6  |     await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  7  | 
  8  |     const columnA = page.locator("#column-a");
  9  |     const columnB = page.locator("#column-b");
  10 | 
> 11 |     await expect(columnA).toContainText("a");
     |                           ^ Error: expect(locator).toContainText(expected) failed
  12 |     await expect(columnB).toContainText("b");
  13 | 
  14 |     await columnB.dragTo(columnA);
  15 |     await page.waitForTimeout(5000);
  16 | 
  17 |     await expect(columnA).toContainText("b");
  18 |     await expect(columnB).toContainText("a");
  19 | 
  20 | })
```