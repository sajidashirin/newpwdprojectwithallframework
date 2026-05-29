const config = require('../config/env');

class LoginPage {

    constructor(page) {

        this.page = page;

        this.username = '#user-name';
        this.password = '#password';
        this.loginButton = '#login-button';
        //this.loginButton = '#final-login-btn';

        this.errorMessage = 'h3[data-test="error"]';
    }

    async goto() {
        await this.page.goto(config.baseUrl);
    }

    async login(username, password) {

        await this.page.locator(this.username).fill(username);

        await this.page.locator(this.password).fill(password);

        await this.page.locator(this.loginButton).click();
    }

    getErrorMessage() {
        return this.page.locator(this.errorMessage);
    }

}

module.exports = LoginPage;