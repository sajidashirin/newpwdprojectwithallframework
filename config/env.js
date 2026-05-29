const env = process.env.TEST_ENV || 'qa';

const environments = {
    dev: require('./dev'),
    qa: require('./qa'),
    uat: require('./uat')
};

module.exports = environments[env];