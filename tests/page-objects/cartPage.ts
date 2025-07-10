import { expect, Page } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    constructor (page: Page){
        this.page=page;
    }

    async checkCartPageName(){

   await (this.page.locator('xpath = /html/body/div/div/div/div[1]/div[2]')).isVisible();  

    }

    async checkNumberInTheCart(count:number){

        const cartBadge = this.page.locator('xpath = /html/body/div/div/div/div[1]/div[1]/div[3]/a/span');
        await expect(cartBadge).toHaveText('2');
    }

    async clickOnCheckout(){
        await this.page.locator('xpath = /html/body/div/div/div/div[2]/div/div[2]/button[2]').click();  
    }

}