const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    timeout: 30000,

    reporter: [
        ['html'],
        ['list']
    ],

    use: {

        headless: false,

        screenshot: 'only-on-failure',

        video: 'on',

        trace: 'on',

        baseURL: 'https://www.saucedemo.com',

        launchOptions: {
            slowMo: 500
        }

    }

});