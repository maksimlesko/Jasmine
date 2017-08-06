var loginField = element(by.id('username'));
var passField = element(by.id('password'));
var loginButton = element(by.className('wk-button-primary wk-button-full'));

var login_page = function() {

	this.logIn = function(value1,value2) {
        loginField.sendKeys(value1)
			.then(function(value1) {
                passField.sendKeys(value2)})
					.then(function(value2){loginButton.click()});
	};

	this.getLoginPageTitle = function() {
		return browser.getTitle();
	};
	
};

module.exports = new login_page();