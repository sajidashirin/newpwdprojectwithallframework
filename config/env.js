const ENV = process.env.ENV || 'qa';

const config = {

    qa: {
        baseURL: 'https://www.saucedemo.com/'
    },

    uat: {
        baseURL: 'https://www.saucedemo.com/'
    }

};

module.exports = config[ENV];