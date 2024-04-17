import { test, expect } from "@playwright/test"

test("interactions with inputs", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log("Before entering data: " + await messageInput.inputValue());
    await messageInput.pressSequentially("Hi there!");
    console.log("After entering data: " + await messageInput.inputValue());

});

test("Sum", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator("#sum1");
    const sum2input = page.locator("#sum2");
    const getValuesBtn = page.locator("//button[text()='Get Sum']");
    const getResultField = page.locator("#addmessage")

    let num1 = 123;
    let num2 = 321;
    let expectedResult = 444;

    await sum1input.fill("" + num1);
    await sum2input.fill("" + num2);
    await getValuesBtn.click();   

    // expect(await getResultField.textContent() == "444");
    expect(getResultField).toHaveText("" + expectedResult);
});

test("Checkbox", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckBox = page.locator("id=isAgeSelected");
    expect(singleCheckBox).not.toBeChecked();
    await singleCheckBox.check();
    expect(singleCheckBox).toBeChecked();

});
