import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://selectorshub.com/iframe-scenario/');

    let frame1: FrameLocator = page.frameLocator('#pact1').first();
    let frame2: FrameLocator = frame1.frameLocator('#pact2');
    let frame3: FrameLocator = frame2.frameLocator('#pact3');

    await frame1.getByPlaceholder("First Crush").fill("Test1");
    await frame2.getByPlaceholder("Current Crush Name").fill("Test2");
    await frame3.getByPlaceholder("Destiny").fill("Test3");



})    