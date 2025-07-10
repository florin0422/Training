import { Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    constructor (page: Page){
        this.page=page;
    }

    async performLogin(){

           await this.page.getByPlaceholder('Username').fill('standard_user');  
           await this.page.getByRole('textbox', {name: 'password'}).fill('secret_sauce');  
           await this.page.locator('xpath = /html/body/div/div/div[2]/div[1]/div/div/form/input').click();  
           

    }

}