import { test, expect } from '@playwright/test';
import { LoginPage } from './page-objects/loginPage';
import { ProductsPage } from './page-objects/productsPage';
import { CartPage } from './page-objects/cartPage';
import { YourInfoPage } from './page-objects/yourInfoPage';

 test.skip('get started link', {tag: ['@smoke']}, async ({ page }) => { 

   await page.goto('https://www.saucedemo.com/'); 
   const loginPage = new LoginPage(page);
   await loginPage.performLogin();
   await page.waitForTimeout(1000);  
   const productsPage = new ProductsPage(page);
   await productsPage.checkAppLogo();
   await productsPage.addBackPack();
   await page.waitForTimeout(1000);  
   await productsPage.sortHiLo();
   await page.waitForTimeout(1000);
   await productsPage.scrollToOnsie();
   await page.waitForTimeout(1000);
   await productsPage.addRedTshirt();
   await productsPage.addOnsie();
   await page.waitForTimeout(1000);
   await productsPage.removeOnsie();
   await page.waitForTimeout(1000);
   await productsPage.scrollToCart();
   await page.waitForTimeout(1000);
   await productsPage.clickOnCart();
   await page.waitForTimeout(1000); 
   const cartPage = new CartPage (page); 
   await cartPage.checkCartPageName();   
   await cartPage.checkNumberInTheCart;
   await page.waitForTimeout(1000);
   await cartPage.clickOnCheckout();
   //await expect(page.getByText('Checkout: Your Information')).toBeVisible();
   const yourInfoPage = new YourInfoPage(page);
   await yourInfoPage.checkInfoPageName();
   await page.waitForTimeout(1000);
   await page.getByPlaceholder('First Name').fill('Florin');  
   await page.waitForTimeout(1000);
   await page.getByPlaceholder('Last Name').fill('Muresan'); 
   await page.waitForTimeout(1000);
   await page.locator('xpath = //*[@id="continue"]').click();  
   await page.waitForTimeout(1000);
   await expect(page.locator('xpath = /html/body/div/div/div/div[2]/div/form/div[1]/div[4]/h3/button')).toBeVisible();  
   await page.waitForTimeout(1000);
   await page.locator('xpath = /html/body/div/div/div/div[2]/div/form/div[1]/div[4]/h3/button').click();  
   await page.waitForTimeout(1000);
   await page.getByPlaceholder('Zip/Postal Code').fill('400429');  
   await page.waitForTimeout(1000);
   await page.locator('xpath = //*[@id="continue"]').click();  
   await page.waitForTimeout(1000);
   const priceElements = await page.$$('[data-test="inventory-item-price"]');// Adjust this selector to match all individual item prices
   let calculatedTotal = 0;
   let itemIndex = 1;
   for (const priceElement of priceElements) {
   const priceText = await priceElement.textContent();
   if (!priceText) {
   throw new Error(`Item ${itemIndex} has no price text.`);
   }
   const price = parseFloat(priceText.replace(/[^0-9.]/g, '')); // Remove currency symbols, commas, etc.
   console.log(`Item ${itemIndex}: ${priceText} → Parsed: ${price.toFixed(2)}`);
   calculatedTotal += price;
   itemIndex++;
   }
   // Get the total price displayed on the page
   const totalText = await page.textContent('[data-test="subtotal-label"]'); // Update selector as needed
   if (!totalText) {
   throw new Error('Subtotal text not found on the page.');
   }
   const displayedTotal = parseFloat(totalText.replace(/[^0-9.]/g, ''));
   console.log(`\nCalculated total: ${calculatedTotal.toFixed(2)}`);
   console.log(`Displayed total: ${displayedTotal.toFixed(2)}\n`);
   // Compare the two totals
   expect(calculatedTotal).toBeCloseTo(displayedTotal, 2); // Accepts small floating point differences
   await page.waitForTimeout(1000);
   await page.locator('xpath =   /html/body/div/div/div/div[2]/div/div[2]/div[9]/button[2]').scrollIntoViewIfNeeded();  
   await page.waitForTimeout(1000);
   await page.locator('xpath = /html/body/div/div/div/div[2]/div/div[2]/div[9]/button[2]').click();  
   await expect(page.getByText('Checkout: Complete!')).toBeVisible();
   await page.waitForTimeout(1000);
   await page.locator('xpath = //*[@id="back-to-products"]').click();  
   await page.waitForTimeout(1000);
});

