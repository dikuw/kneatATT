const puppeteer = require('puppeteer');

const { login, gotoWorkspace, gotoDocumentTemplates } = require('../shared/shared');

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

    await login(page, username, password);
    await gotoWorkspace(page, "Template Approvals");
    await gotoDocumentTemplates(page);

  } catch (err) {

    console.log(`oops there was an error: ${err}`);

  } finally {

    // await browser.close();

  }

}