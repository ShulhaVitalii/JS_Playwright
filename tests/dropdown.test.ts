import { expect, test } from "@playwright/test"

test("dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    // const dropdown = page.locator("//*[@id='select-demo']");
    const result = page.locator("//p[contains(text(), 'Day selected')]");

    // await dropdown.click();
    // await dropdown.selectOption("Monday");

    let textToSelect = "Monday"

    await page.selectOption("//*[@id='select-demo']", {
                                                        label: textToSelect
                                                    });
    expect(result).toContainText(textToSelect);
});


test("muly select", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    const result = page.locator("//p[text()='Last selected option is :  ']/span");

    await page.selectOption("//*[@id='multi-select']", [{
                                                        label: "Texas"
                                                    },
                                                    {
                                                        index: 2
                                                    },
                                                    {
                                                        value: "Washington"
                                                    }]);
    await page.waitForTimeout(1000);
    await page.click("#printAll");
    await expect(result).toHaveText("Texas, Florida, Washington");
});


test("Butstrap dropdowm", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    

    async function selectCountry(countryName:string) {
        await page.click("#country+span");
        await page.locator("ul#select2-country-results").locator("li", {
            hasText: countryName
        }).click();
    }


    selectCountry("Japan");
    // await page.waitForTimeout(3000);
    await expect(page.locator("#select2-country-container")).toHaveText("Japan");
});