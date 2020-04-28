const { Given, When, Then } = require('cucumber');
const { Selector } = require('testcafe');
const { loginPage } = require('../support/pages/loginPage.js')
const { landlinePage } = require('../support/pages/landlinePage.js')

Then('Successfully lands into Security Check', async function () {
    const securityPage = Selector('[class="PageHeading"]').with({ boundTestRun: testController })
    await testController.expect(securityPage.innerText).contains('Security Check')
});

When('Wait for 3minutes to show timeout modal', async function () {
    const timeModal = Selector('#SBHeader__header-description').with({ boundTestRun: testController })
    await testController.click(timeModal).wait(186000).expect('#timeout-modal__header')
});


When('User sees {string} as tile', async function (otp) {
    const otpTile = Selector('[for="otp"]').with({ boundTestRun: testController })
    await testController.expect(otpTile.innerText).contains(otp)
});

When("Please enter the one time passcode we've sent to ******** is displayed", async function () {
    const otpBanner = Selector('p').prevSibling().with({ boundTestRun: testController })
    await testController.expect(otpBanner.innerText).contains('')
});

When('Send another code should be visible', async function () {
    const SendAnother = Selector('[aria-label="Request another one-time passcode"]').with({ boundTestRun: testController })
    await testController.expect(SendAnother.innerText).contains('Send another code')
});

When('message displayed as {string}', async function (displayMsg) {
    const DisplayMsgCode = Selector('[data-testid="request-otp-message"]').with({ boundTestRun: testController })
    await testController.expect(DisplayMsgCode.innerText).contains(displayMsg)
});

Then('Pasword tile should be displayed', async function () {
    const PassWord = Selector('[for="password"]').with({ boundTestRun: testController })
    await testController.expect(PassWord.innerText).contains('Password')
});

When('{string} should be under OTP tile', async function (noOtp) {
    const NotReceivedOtp = Selector('[class="SBPinEntry__passcode-help"]').with({ boundTestRun: testController })
    await testController.expect(NotReceivedOtp.innerText).contains(noOtp)
});

Then('Message appear as {string}', async function (NoMoreCodes) {
    const SorryNoMoreCodes = Selector('#SBModal__descriptor').with({ boundTestRun: testController })
    await testController.expect(SorryNoMoreCodes.innerText).contains(NoMoreCodes)
    await testController.takeScreenshot();
    await this.addScreenshotToReport();
});

When('Online Pin tile with Pin digits request is displayed', async function () {
    const OnlinePIN = Selector('#pin').with({ boundTestRun: testController })
    await testController.expect(OnlinePIN.innerText).contains('');
});

Then('User enters online pin', async function () {
    var onlinePin = "123123";
    var firstPinLabel = await Selector('[for="pin-0"]').with({ boundTestRun: testController })();
    var secondPinLabel = await Selector('[for="pin-1"]').with({ boundTestRun: testController })();
    var thirdPinLabel = await Selector('[for="pin-2"]').with({ boundTestRun: testController })();
    var firstRequiredDigit = firstPinLabel.textContent.substring(0, 1);
    var secondRequiredDigit = secondPinLabel.textContent.substring(0, 1);
    var thirdRequiredDigit = thirdPinLabel.textContent.substring(0, 1);
    var firstPinInput = await Selector('#pin-0').with({ boundTestRun: testController })();
    var secondPinInput = await Selector('#pin-1').with({ boundTestRun: testController })();
    var thirdPinInput = await Selector('#pin-2').with({ boundTestRun: testController })();
    await testController.typeText(firstPinInput, onlinePin[firstRequiredDigit-1]).typeText(secondPinInput, onlinePin[secondRequiredDigit-1]).typeText(thirdPinInput, onlinePin[thirdRequiredDigit-1]);
  });

Then('User lands to bbc.com', async function() {
    const bbcLanding = Selector('#orb-header').with({boundTestRun: testController})
    await testController.expect(bbcLanding.innerText).contains('Homepage')
})