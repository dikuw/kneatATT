exports.login = async (page, username, password) => {
  await page.waitForSelector('#username');
  await page.type('#username', 'Michael.Vasilevsky');
  await page.type('#pwd', password);
  await page.click('#rc-form-submit');
}

exports.gotoDocumentTemplates = async (page) => {
  await page.waitForSelector('.icon-doc-templates');
  await page.click('.icon-doc-templates');
}