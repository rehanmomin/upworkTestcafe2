const { Given, When, Then } = require('cucumber');
const { Selector } = require('testcafe');
const { loginPage } = require('../support/pages/lloydsloginPage.js')

Given('User lands on LLoyds Bank loginpage', async function () {
    await testController.navigateTo(loginPage.webUrl())
});

When('User enters Username as {string}', async function (name) {
    await testController.typeText(loginPage.userName(), name)
});

When('User enters Password as {string}', async function (name) {
    await testController.typeText(loginPage.passWord(), name)
});

Then('Click on {string} button', async function (visibleButton) {
    const continueLogin = Selector('#frmLogin:btnLogin2').with({ boundTestRun: testController })
    await testController.click(continueLogin).wait(300)
    await testController.takeScreenshot();
    await this.addScreenshotToReport();
});




