const base = require('@playwright/test');

exports.test = base.test.extend({

    authToken: async ({}, use) => {

        console.log('Generating token...');

        const token = 'demo-token-123';

        await use(token);
    }

});

exports.expect = base.expect;