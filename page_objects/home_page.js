var common = require('./common')
var navBar = element(by.className('wk-navbar-container'));
var betaSearch = element(by.className('beta-search-box-title'));
var searchField = element(by.model('query'));
var pressEnter = protractor.Key.ENTER;
var federalTax = element(by.linkText('Federal Tax Topics'));

var home_page = function() {

    this.findNavBar = function(){
    	return navBar;
    };

    this.getHomePageTitle = function() {
        return browser.getTitle();
    };

    this.betaSearchField = function(){
        return betaSearch;
	};

    this.enterSearchTerm = function(value){
        return searchField.sendKeys(value);
	};

	this.runMainSearch = function(){
        return searchField.sendKeys(pressEnter);
	};

	this.findFederal = function () {
        common.waitFor(federalTax)
			.then(function () {
				federalTax.click();
        });

    };
};

module.exports = new home_page();