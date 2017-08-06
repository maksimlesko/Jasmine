var EC = protractor.ExpectedConditions;
var removeCookies = browser.manage().deleteAllCookies();
var manageWindow =  browser.driver.manage().window();

var common = function(){

    this.waitFor = function(value){
        return browser.wait(EC.visibilityOf(value), 15000);
    };
    this.clearBrowser = function () {
        return removeCookies;
    };
    this.maximizeWindow = function (){
        return manageWindow.maximize();
    };
    this.customWindow = function (value1,value2){
       return manageWindow.setSize(value1,value2);
    };
};

module.exports = new common();