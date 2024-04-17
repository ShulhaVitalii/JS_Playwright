import { test } from "@playwright/test";
import moment from "moment";

test('Calendar demo using fill', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')

    let date = "1994-12-04";
    await page.fill("id='birthday", date);
    await page.waitForTimeout(3000);


});

test('Calendar demo using moment', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    let date = "1994-12-04";   

    await selectDate(2, "May 2022");
    page.reload();
    await selectDate(5, "September 2024");


    // await prev.click();
    // await page.click("//td[@class='day'][text()='4']");  

    async function selectDate(date: number, dateToSelect: string) {
        
        await page.click("//input[@placeholder='Start date']");

        const mmYY = page.locator("(//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//th[@class='prev'])[1]");
        const next = page.locator("(//th[@class='next'])[1]");

        // let dateToSelect: string = "May 2022";

        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();

        while (await mmYY.textContent() != dateToSelect) {
            if (thisMonth) {
                await prev.click();
            }
            else {
                await next.click();
            }
        }
        await page.click(`//td[@class='day'][text()='${date}']`);
    }
    
    await page.waitForTimeout(3000);
});