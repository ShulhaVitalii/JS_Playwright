import { test, expect }from "@playwright/test";


test("Interact with frames", async({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();
    console.log("No. of frames: " + allFrames.length);
    const frame = page.frameLocator("#firstFr");


    await frame.locator("input[name='fname']").fill("OLOLO");
    await frame.locator("input[name='lname']").fill("grgrgrg");

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']");
    innerFrame.locator("input[name='email']").fill("email@example.com");


    // const myFrame = page.frame("firstFr");
    // if (myFrame != null){
    //     await myFrame.fill("input[name='fname']", "OLOLO");
    // }
    // await myFrame?.fill("input[name='fname']", "OLOLO");
    // await myFrame?.fill("input[name='lname']", "grgrgrg");
    // expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")

    await page.waitForTimeout(3000);

});