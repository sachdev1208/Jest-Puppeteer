async function googleSearch(page,keyword) {
    await page.waitFor('input[name="q"]');
    await page.type('input[name="q"]', keyword);
    await page.keyboard.press('Enter');
    await page.waitFor(2000);
}
module.exports = { googleSearch }