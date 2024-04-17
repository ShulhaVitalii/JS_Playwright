import { Page } from "@playwright/test";

export default class RegisterPage{

    constructor(public page: Page) {

    }

    async enterFirstName(firstName: string) {
        await this.page.locator("#input-firstname").fill(firstName);

    }

    async enterLastName(lastName: string) {
        await this.page.locator("#input-lastname").fill(lastName);

    }

    async enterEmail(email: string) {
        await this.page.locator("#input-email").fill(email);

    }

    async enterTelephone(phoneNumber: string) {
        await this.page.locator("#input-telephone").fill(phoneNumber);

    }

    async enterPassword(password: string) {
        await this.page.locator("#input-password").fill(password);

    }

    async enterConfirmPassword(password: string) {
        await this.page.locator("#input-confirm").fill(password);

    }

    isSubscribeChecked(){
        return this.page.locator("#input-newsletter-no");
    }

    async clickTermAndCondition() {
        await this.page.click("//label[@for='input-agree']");

    }

    async clickContinueBtn() {
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            await this.page.click("//input[@type='submit']")
        ])      

    }
}