import { expect, test } from "../base/pomFixtures";
import * as data from "../testData/addToCartTestData.json";


test.describe("Page object tests", async () => {
    test("Register test_01", async ({page, baseURL, registerPage}) => {
   
        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.firstname);
        await registerPage.enterLastName(data.lastname);
        await registerPage.enterEmail(data.email);
        await registerPage.enterTelephone(data.phone_num);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermAndCondition();
        await registerPage.clickContinueBtn();
        // add check for new user creation
    });
    
    test("Login test_02", async ({page, baseURL, loginPage}) => {
   
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.enterEmail(data.email);
        await loginPage.enterPassword(data.password);
        await loginPage.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    });
    
    test("Add to cart test_03", async ({page, baseURL, loginPage, homePage, specialPage}) => {    
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(data.email, data.password);
    
        await homePage.clickOnSpecialHot();
        await specialPage.addFirstProductToTheCart();
        const isCartVisible = await specialPage.isToastVisible();
        expect(isCartVisible).toBeVisible();
    });
});
