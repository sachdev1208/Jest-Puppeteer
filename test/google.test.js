// test.js
var googlepage = require('E:/pupeteer/puppeteerFramework/page/googlePage.js');
var prop = require('E:/pupeteer/puppeteerFramework/config.js');
const timeout = 105000;

describe(
  '/ (Home Page)',
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.waitFor(3000);
      await page.goto(prop.url);
    }, timeout);

    it('should load without error', async () => {
      await googlepage.googleSearch(page,"Puppeteer");
      const text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain('Puppeteer');
    });
  },
  timeout,
);