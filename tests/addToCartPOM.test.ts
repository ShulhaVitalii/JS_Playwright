import test, { expect } from "@playwright/test";
import RegisterPage from "../pages/registrationPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SpecialHatPage from "../pages/spesialHotPage";


const testEmail = "vetalik@example.com";
const testPassword = "Pa$$w0rd";

test.describe("Page object tests", async () => {
    test("Register test_01", async ({page, baseURL}) => {
        const rP = new RegisterPage(page);
    
        await page.goto(`${baseURL}route=account/register`);
        await rP.enterFirstName("Vitalii");
        await rP.enterLastName("Illative");
        await rP.enterEmail(testEmail);
        await rP.enterTelephone("1234567890");
        await rP.enterPassword(testPassword);
        await rP.enterConfirmPassword(testPassword);
        expect(rP.isSubscribeChecked()).toBeChecked();
        await rP.clickTermAndCondition();
        await rP.clickContinueBtn();
    });
    
    test("Login test_02", async ({page, baseURL}) => {
        const lP = new LoginPage(page);
    
        await page.goto(`${baseURL}route=account/login`);
        await lP.enterEmail(testEmail);
        await lP.enterPassword(testPassword);
        await lP.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    });
    
    test("Add to cart test_03", async ({page, baseURL}) => {
        const lP = new LoginPage(page);
        const homePage = new HomePage(page);
        const specialPage = new SpecialHatPage(page);
    
        await page.goto(`${baseURL}route=account/login`);
        await lP.login(testEmail, testPassword);
    
        await homePage.clickOnSpecialHot();
        await specialPage.addFirstProductToTheCart();
        const isCartVisible = await specialPage.isToastVisible();
        expect(isCartVisible).toBeVisible();
    });
});