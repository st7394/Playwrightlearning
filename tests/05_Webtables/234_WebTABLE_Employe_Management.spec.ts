import { test, expect } from '@playwright/test';

test('Employee Management Table Tests', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');
    const Name = "Kabir";


    await page.locator("#employee-search").fill(Name);

   // await expect(page.locator("tbody tr").first()).toBeVisible();
    const rows = page.locator("tbody tr");
    const count = await rows.count();
    console.log("Total rows found:", count);

    for (let i = 0; i < count; i++) {
        const row = rows.nth(i);
        const username = await row.locator(".username").textContent();
        console.log("Row", i, "username:", username);

        if (username?.trim() === "Kabir.Khan") {
            const checkbox = row.locator('input[type="checkbox"]');
            await expect(checkbox).toBeVisible();
            await checkbox.check();
            console.log("Checked checkbox for Kabir.Khan");
            const selectedtext = await page.locator("#selected-output").textContent();
            
            expect(selectedtext).toContain("Kabir.Khan");
        }
    }

});