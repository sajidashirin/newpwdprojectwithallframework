class DashboardPage {

    constructor(page) {

        this.page = page;

        this.title = '.title';
    }

    getTitle() {
        return this.page.locator(this.title);
    }

}

module.exports = DashboardPage;