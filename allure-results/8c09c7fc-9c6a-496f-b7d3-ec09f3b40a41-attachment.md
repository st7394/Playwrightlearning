# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Webtables\234_WebTABLE_Employe_Management.spec.ts >> Employee Management Table Tests
- Location: tests\05_Webtables\234_WebTABLE_Employe_Management.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('tbody tr').first()
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('tbody tr').first()
    9 × locator resolved to <tr data-team="cloud-qa" data-username="Aarav.Sharma">…</tr>
      - unexpected value "hidden"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - complementary "Practice navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "T The Testing Academy" [ref=e5] [cursor=pointer]:
        - /url: ./index.html
        - generic [ref=e6]: T
        - strong [ref=e8]: The Testing Academy
      - button "Toggle sidebar" [ref=e9] [cursor=pointer]:
        - img [ref=e10]
    - generic [ref=e13]:
      - img [ref=e14]
      - searchbox / [ref=e17]
      - generic [ref=e18]: /
    - navigation [ref=e19]:
      - generic [ref=e20]:
        - paragraph [ref=e21]:
          - img [ref=e22]
          - generic [ref=e24]: Get started
        - list [ref=e25]:
          - listitem [ref=e26]:
            - link "Overview" [ref=e27] [cursor=pointer]:
              - /url: ./index.html
              - img [ref=e29]
              - generic [ref=e32]: Overview
      - generic [ref=e33]:
        - paragraph [ref=e34]:
          - img [ref=e35]
          - generic [ref=e37]: Selectors & Locators
        - list [ref=e38]:
          - listitem [ref=e39]:
            - link "Multiple Element Filter" [ref=e40] [cursor=pointer]:
              - /url: ./multiple_element_filter.html
              - img [ref=e42]
              - generic [ref=e45]: Multiple Element Filter
          - listitem [ref=e46]:
            - link "Web Table Directory" [ref=e47] [cursor=pointer]:
              - /url: ./webtable.html
              - img [ref=e49]
              - generic [ref=e54]: Web Table Directory
      - generic [ref=e55]:
        - paragraph [ref=e56]:
          - img [ref=e57]
          - generic [ref=e60]: Tables & Forms
        - list [ref=e61]:
          - listitem [ref=e62]:
            - link "QA Profile Form" [ref=e63] [cursor=pointer]:
              - /url: ./tables/practice.html
              - img [ref=e65]
              - generic [ref=e68]: QA Profile Form
          - listitem [ref=e69]:
            - link "Companies Table" [ref=e70] [cursor=pointer]:
              - /url: ./tables/webtable.html
              - img [ref=e72]
              - generic [ref=e75]: Companies Table
          - listitem [ref=e76]:
            - link "Tall Buildings Table" [ref=e77] [cursor=pointer]:
              - /url: ./tables/webtable1.html
              - img [ref=e79]
              - generic [ref=e81]: Tall Buildings Table
          - listitem [ref=e82]:
            - link "Custom Dropdowns" [ref=e83] [cursor=pointer]:
              - /url: ./tables/dropdowns.html
              - img [ref=e85]
              - generic [ref=e88]: Custom Dropdowns
          - listitem [ref=e89]:
            - link "Select Box Variants" [ref=e90] [cursor=pointer]:
              - /url: ./tables/select-boxes.html
              - img [ref=e92]
              - generic [ref=e95]: Select Box Variants
          - listitem [ref=e96]:
            - link "Sortable Admin Table" [ref=e97] [cursor=pointer]:
              - /url: ./tables/sortable.html
              - generic [ref=e99]: Sortable Admin Table
          - listitem [ref=e100]:
            - link "Cricket Scorecard" [ref=e101] [cursor=pointer]:
              - /url: ./tables/scorecard.html
              - generic [ref=e103]: Cricket Scorecard
      - generic [ref=e104]:
        - paragraph [ref=e105]:
          - img [ref=e106]
          - generic [ref=e111]: Frames
        - list [ref=e112]:
          - listitem [ref=e113]:
            - link "Frames overview" [ref=e114] [cursor=pointer]:
              - /url: ./frames/index.html
              - img [ref=e116]
              - generic [ref=e118]: Frames overview
          - listitem [ref=e119]:
            - link "Multi-frame frameset" [ref=e120] [cursor=pointer]:
              - /url: ./frames/multi-frames.html
              - img [ref=e122]
              - generic [ref=e127]: Multi-frame frameset
          - listitem [ref=e128]:
            - link "Nested iframes" [ref=e129] [cursor=pointer]:
              - /url: ./frames/nested-iframes.html
              - img [ref=e131]
              - generic [ref=e135]: Nested iframes
          - listitem [ref=e136]:
            - link "Courses frameset" [ref=e137] [cursor=pointer]:
              - /url: ./frames/courses-frameset.html
              - generic [ref=e139]: Courses frameset
      - generic [ref=e140]:
        - paragraph [ref=e141]:
          - img [ref=e142]
          - generic [ref=e145]: Widgets
        - list [ref=e146]:
          - listitem [ref=e147]:
            - link "SVG locators" [ref=e148] [cursor=pointer]:
              - /url: ./widgets/svg.html
              - generic [ref=e150]: SVG locators
          - listitem [ref=e151]:
            - link "Shadow DOM" [ref=e152] [cursor=pointer]:
              - /url: ./widgets/shadow-dom.html
              - generic [ref=e154]: Shadow DOM
          - listitem [ref=e155]:
            - link "Calendar / date picker" [ref=e156] [cursor=pointer]:
              - /url: ./widgets/calendar.html
              - generic [ref=e158]: Calendar / date picker
          - listitem [ref=e159]:
            - link "Drag & drop Kanban" [ref=e160] [cursor=pointer]:
              - /url: ./widgets/dnd.html
              - generic [ref=e162]: Drag & drop Kanban
          - listitem [ref=e163]:
            - link "Toasts & notifications" [ref=e164] [cursor=pointer]:
              - /url: ./widgets/toasts.html
              - generic [ref=e166]: Toasts & notifications
          - listitem [ref=e167]:
            - link "Native dialogs" [ref=e168] [cursor=pointer]:
              - /url: ./widgets/dialogs.html
              - generic [ref=e170]: Native dialogs
          - listitem [ref=e171]:
            - link "Hover menus" [ref=e172] [cursor=pointer]:
              - /url: ./widgets/hover-menu.html
              - generic [ref=e174]: Hover menus
          - listitem [ref=e175]:
            - link "Right-click menu" [ref=e176] [cursor=pointer]:
              - /url: ./widgets/context-menu.html
              - generic [ref=e178]: Right-click menu
          - listitem [ref=e179]:
            - link "Keyboard navigation" [ref=e180] [cursor=pointer]:
              - /url: ./widgets/keyboard-form.html
              - generic [ref=e182]: Keyboard navigation
      - generic [ref=e183]:
        - paragraph [ref=e184]:
          - img [ref=e185]
          - generic [ref=e188]: Network
        - list [ref=e189]:
          - listitem [ref=e190]:
            - link "Network interception" [ref=e191] [cursor=pointer]:
              - /url: ./network/intercept.html
              - generic [ref=e193]: Network interception
      - generic [ref=e194]:
        - paragraph [ref=e195]:
          - img [ref=e196]
          - generic [ref=e198]: Coming next
        - list [ref=e199]:
          - listitem [ref=e200]:
            - link "Windows & Tabs Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Windows & Tabs
              - generic: Soon
          - listitem [ref=e201]:
            - link "Upload & Download Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Upload & Download
              - generic: Soon
    - generic [ref=e202]:
      - generic [ref=e203]: © The Testing Academy · 2026
      - button "Toggle dark mode" [ref=e204] [cursor=pointer]:
        - img [ref=e205]
  - generic [ref=e207]:
    - banner [ref=e208]:
      - button "Open sidebar" [ref=e209] [cursor=pointer]:
        - img [ref=e210]
      - generic [ref=e212]:
        - link "Practice" [ref=e213] [cursor=pointer]:
          - /url: ./index.html
        - img [ref=e214]
        - strong [ref=e216]: Web Table Directory
      - generic [ref=e217]:
        - generic [ref=e218]: 10 rows
        - button "Toggle dark mode" [ref=e219] [cursor=pointer]:
          - img [ref=e220]
          - img [ref=e222]
    - main [ref=e225]:
      - region "CloudOps India Employee Directory" [ref=e226]:
        - generic [ref=e227]: Locator practice · Web table
        - heading "CloudOps India Employee Directory" [level=1] [ref=e229]:
          - text: CloudOps India
          - emphasis [ref=e230]: Employee Directory
        - paragraph [ref=e231]:
          - text: A realistic employee table built for practising XPath sibling traversal, CSS
          - code [ref=e232]: :has()
          - text: ", checkbox selection, and extracting row data. The data is intentionally Indianised so the names feel familiar."
        - generic [ref=e233]:
          - generic [ref=e234]:
            - strong [ref=e235]: "10"
            - generic [ref=e236]: Employee rows
          - generic [ref=e237]:
            - strong [ref=e238]: "7"
            - generic [ref=e239]: Visible columns
          - generic [ref=e240]:
            - strong [ref=e241]: "3"
            - generic [ref=e242]: Selector patterns
          - generic [ref=e243]:
            - strong [ref=e244]: "0"
            - generic [ref=e245]: External APIs
      - region "Web table practice workspace" [ref=e246]:
        - generic [ref=e247]:
          - generic [ref=e248]:
            - generic [ref=e249]:
              - heading "CloudOps India Employee Directory" [level=2] [ref=e250]
              - paragraph [ref=e251]: Use this table to practise locating rows, checkboxes, and sibling columns.
            - generic [ref=e252]: Practice page
          - generic "Table tools" [ref=e253]:
            - searchbox "Search employee table" [active] [ref=e254]: Kabir
            - button "Select Cloud QA" [ref=e255] [cursor=pointer]
            - button "Clear" [ref=e256] [cursor=pointer]
          - table "Employee Management System table" [ref=e258]:
            - rowgroup [ref=e259]:
              - row "Select Username Employee Name User Role City Project Status" [ref=e260]:
                - columnheader "Select" [ref=e261]
                - columnheader "Username" [ref=e262]
                - columnheader "Employee Name" [ref=e263]
                - columnheader "User Role" [ref=e264]
                - columnheader "City" [ref=e265]
                - columnheader "Project" [ref=e266]
                - columnheader "Status" [ref=e267]
            - rowgroup [ref=e268]:
              - row "Select Kabir.Khan Kabir.Khan KK Kabir Khan EMP-1005 Security Tester Hyderabad Udaan Risk Active" [ref=e269]:
                - cell "Select Kabir.Khan" [ref=e270]:
                  - checkbox "Select Kabir.Khan" [ref=e271] [cursor=pointer]
                - cell "Kabir.Khan" [ref=e272]
                - cell "KK Kabir Khan EMP-1005" [ref=e273]:
                  - generic [ref=e274]:
                    - generic [ref=e275]: KK
                    - generic [ref=e276]:
                      - strong [ref=e277]: Kabir Khan
                      - generic [ref=e278]: EMP-1005
                - cell "Security Tester" [ref=e279]
                - cell "Hyderabad" [ref=e280]
                - cell "Udaan Risk" [ref=e281]
                - cell "Active" [ref=e282]:
                  - generic [ref=e283]: Active
          - generic [ref=e284]:
            - generic [ref=e285]:
              - generic [ref=e286]: 1 visible rows
              - generic [ref=e287]: 0 selected
            - generic [ref=e288]: Selected usernames will appear here.
        - complementary "Lesson and solution" [ref=e289]:
          - generic [ref=e290]:
            - heading "What students should practise" [level=2] [ref=e291]
            - paragraph [ref=e292]: The page is the problem. Try these on your own first — the solution stays hidden until you reveal it.
            - list [ref=e293]:
              - listitem [ref=e294]: Click the checkbox beside a username using XPath preceding-sibling.
              - listitem [ref=e295]:
                - text: Find a complete row using CSS
                - code [ref=e296]: tr:has(td:text(...))
                - text: .
              - listitem [ref=e297]: Read all the data after a username using following-sibling columns.
              - listitem [ref=e298]: Filter rows by team, city, role, or status without relying on hardcoded row numbers.
          - group [ref=e299]:
            - generic "Playwright solution Try the practice first — reveal the snippet only when you need a hint. Show solution" [ref=e300] [cursor=pointer]:
              - img [ref=e302]
              - generic [ref=e304]:
                - strong [ref=e305]: Playwright solution
                - generic [ref=e306]: Try the practice first — reveal the snippet only when you need a hint.
              - generic [ref=e307]: Show solution
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Employee Management Table Tests', async ({ page }) => {
  4  |     await page.goto('https://app.thetestingacademy.com/playwright/webtable');
  5  |     const Name = "Kabir";
  6  | 
  7  | 
  8  |     await page.locator("#employee-search").fill(Name);
  9  | 
> 10 |     await expect(page.locator("tbody tr").first()).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
  11 |     const rows = page.locator("tbody tr");
  12 |     const count = await rows.count();
  13 |     console.log("Total rows found:", count);
  14 | 
  15 |     for (let i = 0; i < count; i++) {
  16 |         const row = rows.nth(i);
  17 |         const username = await row.locator(".username").textContent();
  18 |         console.log("Row", i, "username:", username);
  19 | 
  20 |         if (username?.trim() === "Kabir.Khan") {
  21 |             await row.locator('input[type="checkbox"]').check();
  22 |             console.log("Checked checkbox for Kabir.Khan");
  23 |             const selectedtext = await page.locator("#selected-output").textContent();
  24 |             
  25 |             expect(selectedtext).toContain("Kabir.Khan");
  26 |         }
  27 |     }
  28 | 
  29 | });
```