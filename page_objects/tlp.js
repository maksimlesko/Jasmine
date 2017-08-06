var common = require('./common');
var EC = protractor.ExpectedConditions;
var barTitle = element(by.linkText('Key Primary Sources'));
var topicTitle = element(by.linkText('Federal Tax Topics'));
var topicTitle2 = element(by.linkText('Accounting Methods and Changes in Accounting Methods'));
var topicTitle3 = element(by.linkText('Cash Method of Accounting'));
var subPageHeader = element(by.css('.topic-page .subpage-header h1'));
var backToTop = element(by.className('wk-button taa-scroll-to-top-button'));

var tlp = function() {

    this.findFederal = function() {
        return common.waitFor(topicTitle)
            .then (function () {
                topicTitle.click()
            });
    };

    this.waitForTlp = function() {
        return common.waitFor(topicTitle2);
    };

    this.openSubTopic = function() {
        return common.waitFor(topicTitle3)
            .then(function() {
            element(topicTitle3.click()
                .then(function(){
                    return common.waitFor(subPageHeader);
                }));
        });
    };

    this.waitForSidebar = function() {
        return common.waitFor(barTitle);
    };

    this.doubleClickKeySources = function() {
        return browser.actions().doubleClick(barTitle).perform()};

    this.scrollUp = function() {
       return browser.executeScript('window.scrollTo(0,0)')};

    this.moveMouseLink = function(value){
        return browser.actions().mouseMove(element(by.linkText(value))).perform()};

    this.moveMouseButton = function(){
        return browser.actions().mouseMove(backToTop).perform()};

    this.clickAction = function(){
        return browser.actions().click().perform()};

    this.scrollDown = function(){
        return browser.executeScript('window.scrollTo(0, document.body.scrollHeight)')};

    this.backToTopButton = function() {
        return backToTop
    };

};

module.exports = new tlp();