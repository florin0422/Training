import { Page } from "@playwright/test";

export class YourInfoPage {
    readonly page: Page;
    constructor (page: Page){
        this.page=page;
    }

    async checkInfoPageName(){

    await (this.page.getByText('Checkout: Your Information')).isVisible();

    }

}