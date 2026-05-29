const { test, expect } = require('../fixtures/authFixture');


test('@smoke API + UI Combined Example',

    async ({ page, authToken }) => {

        console.log('Using Token:', authToken);

        await page.goto('https://example.com');

        await page.evaluate((token) => {

            localStorage.setItem('authToken', token);

        }, authToken);

        await page.goto('https://example.com/dashboard');

        await expect(page).toHaveURL(/dashboard/);

});