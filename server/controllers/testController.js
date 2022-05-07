const puppeteer = require('puppeteer');

exports.testRunner = async () => {

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();

  await page.goto(testTenant);

}