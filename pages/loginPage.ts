import { Page } from "@playwright/test";

export default class LoginPage{

    constructor(public page: Page) {

    }

    async login(email: string, password: string){
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }

    async enterEmail(email: string) {
        await this.page.locator("#input-email").fill(email);

    }

    async enterPassword(password: string) {
        await this.page.locator("#input-password").fill(password);

    }

    async clickLoginBtn() {
        await Promise.all([
            await this.page.waitForLoadState('networkidle'),
            await this.page.click("//input[@type='submit']")
        ]) 
        
        

    }

    async clickForgetPasswordBtn() {

        await this.page.click("Forgotten Password");   

    }
};