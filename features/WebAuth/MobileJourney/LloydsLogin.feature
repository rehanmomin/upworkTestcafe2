Feature: Successful Login to Lloyds Bank Website

    As a user
    I want to login to Web Auth SPA
    So that i can verify credentials

    Scenario: Login to LLoyds's bank Web Auth Home Page
        Given User lands on LLoyds Bank loginpage
        When User enters Username as "Vandana911"
        When User enters Password as "Hyderbad123"
        Then Click on "Continue" button




