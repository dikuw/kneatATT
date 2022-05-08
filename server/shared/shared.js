exports.login = async (page, username, password) => {
  await page.waitForSelector('#username');
  await page.type('#username', 'Michael.Vasilevsky');
  await page.type('#pwd', password);
  await page.click('#rc-form-submit');
}

exports.gotoWorkspace = async (page, workspace) => {
  await page.waitForSelector('[data-automationid="activeWorkspace"]');
  await page.waitForTimeout(1000);
  await page.click('[data-automationid="activeWorkspace"]');
  await page.waitForTimeout(1000);
  let [el] = await page.$x(`//span[contains(text(),"${workspace}")]`)
  await el.click();
}

exports.gotoDocumentTemplates = async (page) => {
  await page.waitForSelector('.icon-doc-templates');
  await page.click('.icon-doc-templates');
}