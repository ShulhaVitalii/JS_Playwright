import { test, expect }from "@playwright/test";


test("Interact with multiple tabs", async({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    // console.log(page.url());

    // const [newWindow] = await Promise.all([
    //     page.waitForEvent("popup"),
    //     page.click("'Follow On Twitter'")
    // ])    
    // console.log(newWindow.url());
    // expect(newWindow.url()).toEqual("https://twitter.com/Lambdatesting");
    // await page.waitForTimeout(3000);


    const [multiPages] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])

    await multiPages.waitForLoadState();

    const pages = multiPages.context().pages();
    console.log("No. of tabs: " + pages.length);
    
    pages.forEach(tab => {
        console.log(tab.url());
    });

    await pages[1].fill("", "ololo");

});