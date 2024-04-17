import { Page } from "@playwright/test";

export default class HomePage{

    constructor(public page: Page){

    }

    async clickOnSpecialHot(){
        await Promise.all([
            await this.page.waitForLoadState('networkidle'),
            await this.page.click("(//span[contains(text(), 'Special')]/../..)[2]")
        ])
        
    }




}