const puppeteer = require('puppeteer');

const { login, gotoWorkspace, gotoDocumentTemplates, selectDiscipline, gotoApprovalTemplates, gotoApprovalTemplate, takeScreenshot } = require('../shared/shared');

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
    await selectDiscipline(page, "CQV");
    await gotoApprovalTemplates(page);
    await gotoApprovalTemplate(page);
    await takeScreenshot(page);
    console.log('🟢🟢 done 🟢🟢');

  } catch (err) {

    console.log(`🛑🛑 oops there was an error: ${err} 🛑🛑`);

  } finally {

    // await browser.close();

  }

}