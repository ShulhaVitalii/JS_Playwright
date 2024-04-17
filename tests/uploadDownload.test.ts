import { test } from "@playwright/test";

test('Download files', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo');

    const textbox = page.locator("#textbox");

    await textbox.pressSequentially("some text text text");
    await page.click("#create");
    // await page.click("#link-to-download");
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("#link-to-download")
    ])

    const fileName = download[0].suggestedFilename();
    await download[0].saveAs(fileName);


    // const path = await download[0].path();
    // console.log(path);


});


test('Upload files', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    // await page.setInputFiles("input[type='file']", ["1.jpg", "2.jpg"]);
//--------------------
    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])

    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(["1.jpg", "2.jpg"]);
  //-------------------  
    await page.waitForTimeout(3000);


});