const puppeteer = require('puppeteer');

exports.testRunner = async () => {

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();

  await page.goto(process.env.TENANT);

  try {

    await page.waitForTimeout(2000);

  } catch (err) {

    console.log(`oops there was an error: ${err}`);

  } finally {

    await browser.close();

  }

}