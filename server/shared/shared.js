const exp = require("constants");

exports.login = async (page, username, password) => {
  await page.waitForSelector('#username');
  await page.type('#username', 'Michael.Vasilevsky');
  await page.type('#pwd', password);
  await page.click('#rc-form-submit');
}

exports.gotoWorkspace = async (page, workspace) => {
  console.log(`🌏 going to workspace ${workspace}...`);
  await page.waitForTimeout(2000);
  await page.waitForSelector('[data-automationid="activeWorkspace"]');
  await page.click('[data-automationid="activeWorkspace"]');
  await page.waitForTimeout(1000);
  let [el] = await page.$x(`//span[contains(text(),"${workspace}")]`)
  await el.click();
}

exports.gotoDocumentTemplates = async (page) => {
  console.log('📑 going to Document Templates...');
  await page.waitForTimeout(1000);
  await page.waitForSelector('.icon-doc-templates');
  await page.click('.icon-doc-templates');
}

exports.selectDiscipline = async (page, discipline) => {
  console.log(`⚗️  selecting discipline ${discipline}...`);
  await page.waitForTimeout(1000);
  await page.waitForSelector('[data-automationid="docTempsDisciplineSelect"]');
  await page.click('[data-automationid="docTempsDisciplineSelect"]');
  await page.waitForTimeout(1000);
  let [el] = await page.$x(`//span[contains(text(),"${discipline}")]`)
  await el.click();
}

exports.gotoApprovalTemplates = async (page) => {
  console.log('✅ going to Approval Templates...');
  await page.waitForTimeout(1000);
  await page.waitForSelector('[data-content="Approval"');
  await page.click('[data-content="Approval"');
}

exports.gotoApprovalTemplate = async (page) => {
  console.log('✅✅ going to Approval Template...');
  await page.waitForTimeout(1000);
  await page.waitForSelector('[role="link"]');
  await page.click('[role="link"]');
  await page.waitForTimeout(1000);
  await page.waitForSelector('.KneatGridExpandControl');
  await page.click('.KneatGridExpandControl');
}

exports.takeScreenshot = async (page) => {
  console.log('📸 taking screenshot...');
  await page.screenshot({ path: `./tests/screenshots/screenshot.png`});
  await page.waitForTimeout(2000);
}