const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}
exports.loginPage ={
    webUrl: function() {
        return 'https://auth.sit.bdn.public.sainsburysbank.cloud/login?goto=https://bbc.co.uk/news?redirect_uri=http://www.google.com';
    },
    userName: function() {
        return userName = Selector('[name="username"]') 
    },
    mobileDigit9: function() {
        return mobileDigit9 = Selector('#digit-0')
    },
    mobileDigit10: function () {
        return mobileDigit10 = Selector('#digit-1')
    },
    mobileDigit11: function() {
        return mobileDigit11 = Selector('#digit-2')
    },
    continueButton: function() {
        return Selector('[class="SubmitButton__input"]');
    }






};