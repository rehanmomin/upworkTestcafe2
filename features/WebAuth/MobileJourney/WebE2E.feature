Feature: Successful Login to Web Auth SPA and lands to redirect url(bbc.com)

    As a user
    I want to login to Web Auth SPA
    So that i can verify credentials

    Scenario: Login to Sainsbury's bank Web Auth Home Page
        Given User opens a browser and lands on Sainsbury Web auth loginpage
        When User enters Username "iris@123"
        When User Enters last 3digits of "mobile" number starts with 9th digit "6"
        When User enters 10th digit of "mobile" number "4"
        When User enters 11th digit of "mobile" number "5"
        Then Click on "Continue"
        Then Successfully lands into Security Check
        When User enters One time passcode as "000000"
        When User enters password as "Iris@123"
        When User enters online pin
        Then Click on "Login"
        And User lands to bbc.com




