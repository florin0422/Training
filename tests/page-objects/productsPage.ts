import { Page } from "@playwright/test";

export class ProductsPage {
    readonly page: Page;
    constructor (page: Page){
        this.page=page;
    }

    async checkAppLogo(){

        await (this.page.locator('.app_logo', { hasText: 'Swag Labs' })).isVisible 

    }

    async addBackPack(){
        
        await this.page.locator('xpath = //*[@id="add-to-cart-sauce-labs-backpack"]').click();  
        await (this.page.locator('xpath = //*[@id="remove-sauce-labs-backpack"]')).isVisible();  

    }

    async sortHiLo(){

        await this.page.selectOption('.product_sort_container', 'hilo');

    }

    async scrollToOnsie() {

        await this.page.locator('xpath = //*[@id="add-to-cart-sauce-labs-onesie"]').scrollIntoViewIfNeeded();  

    }

    async addRedTshirt(){

        await this.page.locator('xpath = //*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();  
        await (this.page.locator('xpath = //*[@id="remove-test.allthethings()-t-shirt-(red)"]')).isVisible();  
    }

    async addOnsie(){

        await this.page.locator('xpath = //*[@id="add-to-cart-sauce-labs-onesie"]').click();  
        await this.page.waitForTimeout(1000);  await (this.page.locator('xpath = //*[@id="remove-sauce-labs-onesie"]')).isVisible();  
           
    }

    async removeOnsie(){
        
        await this.page.locator('xpath = //*[@id="remove-sauce-labs-onesie"]').click();  
        await (this.page.locator('xpath = //*[@id="add-to-cart-sauce-labs-onesie"]')).isVisible();  
    }

    async scrollToCart(){

        await this.page.locator('xpath = /html/body/div/div/div/div[1]/div[1]/div[3]/a').scrollIntoViewIfNeeded();  
    }
    async clickOnCart(){
        
        await this.page.locator('xpath = /html/body/div/div/div/div[1]/div[1]/div[3]/a').click();  

    }

}