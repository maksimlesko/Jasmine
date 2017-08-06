exports.config = {

  capabilities: {
	browserName: 'chrome'
  },

  chromeDriver:'../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.31',

  framework: 'jasmine',

  specs: ['../tests/tests.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
