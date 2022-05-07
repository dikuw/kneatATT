const puppeteer = require('puppeteer');

const { login } = require('../shared/shared');

exports.testRunner = async (tenant, username, password) => {

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();

  await page.goto(tenant);

  try {

    await page.waitForTimeout(2000);
    console.log('username', username);
    await login(page, username, password);

  } catch (err) {

    console.log(`oops there was an error: ${err}`);

  } finally {

    // await browser.close();

  }

}