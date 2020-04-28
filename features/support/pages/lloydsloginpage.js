const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}
exports.loginPage ={
    webUrl: function() {
        return 'https://online.lloydsbank.co.uk/personal/logon/login.jsp?WT.ac=PLO0512&tl_cookie=RAND651292772A314DAD8004A2C5F381BA35_1574262866'
    },
    
    userName: function() {
        return userName = Selector('[for="frmLogin:strCustomerLogin_userID"]')
    },

    passWord: function() {
        return passWord1 = Selector('[for="frmLogin:strCustomerLogin_pwd"]')
    },








};