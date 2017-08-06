var common = require('./common');
var wkButton = element(by.css('.single-action .document-action'));
var wkSearch = element(by.className('wk-search-input'));
var bredcrumbHome = element(by.binding('item.label'));

var results_page = function() {

	this.wkSearchField = function(){
		return wkSearch;
	};
	
	this.waitForIcon = function() {
		return common.waitFor(wkButton);

	};
	
	this.backBrowser = function() {
		return browser.navigate().back();
	};
	
	this.clickHomeBreadcrumb = function() {
		return bredcrumbHome.click();
	};
	
};

module.exports = new results_page();