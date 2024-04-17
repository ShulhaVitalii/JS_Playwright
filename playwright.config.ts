import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {

  // testMatch: ["tests/basicinteractions.test.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: "off",
    video: "off",
    launchOptions: {
      slowMo: 0
    }
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "never"
  }]]

};

export default config;

