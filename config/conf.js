var log4reporter = require('../reporter.js');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html'
});

exports.config = {


    capabilities: {
        browserName: 'chrome'
    },

    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    chromeDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.31',

    framework: 'jasmine',

    specs: ['../tests/tests.js'],

    onPrepare: function () {
        jasmine.getEnv().addReporter(new log4reporter());
        jasmine.getEnv().addReporter(reporter);

    },

    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
