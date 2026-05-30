const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

const Logger = require('../utils/logger');
const Helpers = require('../utils/helpers');

const credentials = require('../config/credentials');
const testData = require('../data/loginData.json');


test.describe('Login Tests', () => {

    testData.forEach((data) => {

        test(`@smoke Login test for ${data.username || 'empty user'}`,

            async ({ page }) => {

                const loginPage = new LoginPage(page);
                const dashboardPage = new DashboardPage(page);

                Logger.info('Opening application');

                await loginPage.goto();

                Logger.info('Performing login');

                console.log(
                "Password available:",
                process.env.SAUCE_PASSWORD ? "YES" : "NO"
                );

                await loginPage.login(
                    data.username,
                    credentials.password
                );

                if (data.expected === 'success') {

                    await expect(page)
                        .toHaveURL(/inventory.html/);

                    await expect(
                        dashboardPage.getTitle()
                    ).toHaveText('Products');

                } else {

                    await expect(
                        loginPage.getErrorMessage()
                    ).toBeVisible();
                }

                await Helpers.takeScreenshot(
                    page,
                    `login-${data.username || 'empty'}`
                );

            });

    });

});

// Fixed production login locator issue