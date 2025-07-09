import { test, expect } from '@playwright/test';

 test('get started link', {tag: ['@smoke']}, async ({ page }) => { 

   await page.goto('https://www.saucedemo.com/'); 
   await page.getByPlaceholder('Username').fill('standard_user');  
   await page.getByRole('textbox', {name: 'password'}).fill('secret_sauce');  
   await page.locator('xpath = /html/body/div/div/div[2]/div[1]/div/div/form/input').click();  
   await page.waitForTimeout(1000);  await expect(page.locator('.app_logo', { hasText: 'Swag Labs' })).toBeVisible();  
   await page.locator('xpath = //*[@id="add-to-cart-sauce-labs-backpack"]').click();  
   await page.waitForTimeout(1000);  await expect(page.locator('xpath = //*[@id="remove-sauce-labs-backpack"]')).toBeVisible();  
   await page.locator('xpath = /html/body/div/div/div/div[2]/div/div/div/div[6]/div[2]/div[2]/button').scrollIntoViewIfNeeded();  
   await page.waitForTimeout(2000);
   await page.locator('xpath = //*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();  
   await page.waitForTimeout(1000);  await expect(page.locator('xpath = //*[@id="remove-test.allthethings()-t-shirt-(red)"]')).toBeVisible();  
   await page.locator('xpath = //*[@id="add-to-cart-sauce-labs-onesie"]').click();  
   await page.waitForTimeout(1000);  await expect(page.locator('xpath = //*[@id="remove-sauce-labs-onesie"]')).toBeVisible();  
   await page.waitForTimeout(2000);
   await page.locator('xpath = //*[@id="remove-sauce-labs-onesie"]').click();  
   await page.waitForTimeout(1000);  await expect(page.locator('xpath = //*[@id="add-to-cart-sauce-labs-onesie"]')).toBeVisible();  
   await page.locator('xpath = /html/body/div/div/div/div[1]/div[1]/div[3]/a').scrollIntoViewIfNeeded();  
   await page.waitForTimeout(1000);
   await page.locator('xpath = /html/body/div/div/div/div[1]/div[1]/div[3]/a').click();  
   await page.waitForTimeout(1000);  await expect(page.locator('xpath = /html/body/div/div/div/div[1]/div[2]')).toBeVisible();  
   const cartBadge = page.locator('xpath = /html/body/div/div/div/div[1]/div[1]/div[3]/a/span');
   await expect(cartBadge).toHaveText('2');
   await page.waitForTimeout(1000);
   await page.locator('xpath = /html/body/div/div/div/div[2]/div/div[2]/button[2]').click();  
   await expect(page.getByText('Checkout: Your Information')).toBeVisible();
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
   // Adjust this selector to match all individual item prices
   const priceElements = await page.$$('[data-test="inventory-item-price"]');
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

