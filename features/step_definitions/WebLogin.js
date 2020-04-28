const { Given, When, Then } = require('cucumber');
const { Selector } = require('testcafe');
const { loginPage } = require('../support/pages/loginPage.js')

Given('User opens a browser and lands on Sainsbury Web auth loginpage', async function () {
    await testController.navigateTo(loginPage.webUrl())
});

When('User enters Username {string}', async function (name) {
    await testController.typeText(loginPage.userName(), name)
});


When('User Enters last 3digits of {string} number starts with 9th digit {string}', async function (Value, digit9) {
    await testController.typeText(loginPage.mobileDigit9(), digit9)
});

When('User enters 10th digit of {string} number {string}', async function (Value, digit10) {
    await testController.typeText(loginPage.mobileDigit10(), digit10)
});

When('User enters 11th digit of {string} number {string}', async function (Value, digit11) {
    await testController.typeText(loginPage.mobileDigit11(), digit11)
});

Then('Click on {string}', async function (visibleButton) {
    const continueLogin = Selector('[class="SubmitButton__input"]').with({ boundTestRun: testController })
    await testController.click(continueLogin).wait(300)
    await testController.takeScreenshot();
    await this.addScreenshotToReport();
});

When('User enters One time passcode as {string}', async function (otp) {
    const onetimePasscode = Selector('#otp').with({ boundTestRun: testController });
    await testController.typeText(onetimePasscode, otp)
});

When('User enters password as {string}', async function (pwd) {
    const passWord = Selector('#password').with({ boundTestRun: testController });
    await testController.typeText(passWord, pwd)
    // await testController.takeScreenshot();
    // await this.addScreenshotToReport();
});




