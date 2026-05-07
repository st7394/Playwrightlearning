import { test, expect } from "@playwright/test";

test("Demo 229",async({page})=>{
      await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
   //   await page.waitForTimeout(2000);
      await page.locator("#page-v1-step1-email").fill("abc@gmail.com");
      await page.getByRole("checkbox",{name:"I agree to VWO's Privacy Policy"}).check();
      await page.getByRole("button",{name:"Create a Free Trial Account",exact:true}).click();
      await expect(page.locator("#page-free-trial-signup-form-step1 >div>div")).toContainText("gmail.com doesn't look like a business domain. Please use your business email.");
      
    
})
