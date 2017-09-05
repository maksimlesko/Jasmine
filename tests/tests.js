var login_page = require('../page_objects/login_page.js');
var home_page = require('../page_objects/home_page.js');
var results_page = require('../page_objects/results_page.js');
var history_page = require('../page_objects/history_page.js');
var tlp = require('../page_objects/tlp.js');
var common = require('../page_objects/common');

function highlight(element) {
        var styleOpt = "color: Red; border: 2px solid red;";
        return browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);", (element), styleOpt)
          .then(function () {
            return browser.wait(function () {
              return (loginPage.loginButton).getCssValue('border').then(function (border) {
                console.log(border.toString());
                return border.toString().indexOf('2px solid rgb(255,') > -1;
              })
            }, 5000, 'Style is not applied');
          }, function (err) {
            console.log("error is :" + err);
          });
      };

describe('test AC application', function() {

    beforeAll(()=> {
        common.clearBrowser()
    });
    afterAll(()=> {
        console.log('Test suite was executed');
    });

    describe('execute login in AC', function() {
        let width = 800;
        let height = 600;
        beforeEach(() => {
            common.customWindow(width,height)});
        afterEach(() => {
            common.maximizeWindow()});

        it('to login to AC app', function () {

            browser.get('http://www.answerconnect.stg.cch.com/?forcestandardlogin#/home');
            var getLoginPageTitle = login_page.getLoginPageTitle();

            login_page.logIn('ac2cl.all108@cch.com', 'password');

            var getHomePageTitle = home_page.getHomePageTitle();

            expect(getLoginPageTitle).toBe('CCH AnswerConnect');
            expect(getHomePageTitle).toBe('CCH AnswerConnect');
            expect(home_page.betaSearchField().isDisplayed()).toBe(true);
        });
    });

    it('to execute the main search', function () {

        home_page.enterSearchTerm('Minsk');
        home_page.runMainSearch();

        //results_page.wkSearchField().getWebElemen();
        highlight(results_page.wkSearchField().getWebElement());
        expect(results_page.wkSearchField().isDisplayed()).toBe(false);

    });

    xit('to check history elements', function () {

        results_page.waitForIcon();
        history_page.openHistoryPopup();
        history_page.clickHistoryItem();
        history_page.waitForWkButton();
        history_page.clickMyHistoryItem('Minsk');
        results_page.waitForIcon();

    });

    xit('to return to the homepage using browser navigation button', function () {

        results_page.backBrowser();
        history_page.waitForWkButton();
        results_page.clickHomeBreadcrumb();

        expect(home_page.findNavBar().isDisplayed()).toBe(true);

    });

    xit('to open tlp docView and check back to top button behavior', function () {

        home_page.findFederal();
        tlp.waitForTlp();
        tlp.openSubTopic();
        tlp.waitForSidebar();
        tlp.doubleClickKeySources();
        tlp.scrollUp();
        tlp.scrollDown();
        tlp.moveMouseButton();
        tlp.clickAction();
        tlp.moveMouseLink('Recommended Topics');
        tlp.clickAction();
        tlp.moveMouseButton();
        tlp.clickAction();

    });

});