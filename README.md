## Installation 

1. Make sure [Node.js](https://nodejs.org/) is installed
2. Navigate to the root of the repo
3. Use the `npm install` command

## Running tests

### Windows
You can run tests by executing the `.\node_modules\.bin\cucumber-js.cmd` or `npm test` commands in command prompt

### Mac or Linux
You can run tests by executing 'node_modules/cucumber/bin/cucumber-js ./features/WebAuth/MobileJourney/WebE2E.feature'



### Change browserstack Credentials
Open Terminal
printenv, wil retrieve current Browserstack details
now do vi ~/.zshrc
Press i will go to Insert mode, edit username and access_key 
Press esc and type :wq click on enter, this will save changes
try do 'printenv' will retrieve updated details

### To run against firefox browser
node_modules/cucumber/bin/cucumber-js ./features/WebAuth/MobileJourney/WebE2E.feature '{\"browser\": \"Safari\"}'


"test:e2e": "testcafe 'browserstack:firefox@58.0:OS X HighSierra,browserstack:ie@11:Windows 10' e2e-tests/*.js
