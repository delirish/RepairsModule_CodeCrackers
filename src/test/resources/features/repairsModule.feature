Feature: Repairs Module Verification
  Agile story: As a User I should be able to access repairs list, search for repair, create/edit/delete a repair

  Background: Given User is on Landing page
    Given User is on Landing page
  @create
  Scenario: Current location "Create and edit" verification
  When User click to repairs module
  And User click create button
  And User click current location box
  And User select create and edit from dropdown list
  Then User sees pop-up page

#Put your scenarios/scenario outlines below:
  @smokeTest1
  Scenario: Customer Dropdown Verification
    Given User is logged in to briteErp Login Page
    And User clicks to Repair module on Landing Page
    And User click to Create button
    And User types "elif" to Customer field
    Then User should see "elif" in the dropdown

  @smokeTest2
  Scenario:Customer : Search header verification
    Given User is logged in to briteErp Login Page
    And User clicks to Repair module on Landing Page
    And User click to Create button
    And User cliks to customer field
    And User cliks Search more field
    Then User should see Search:customer header

  @smokeTest3
  Scenario:
    Given User is logged in to briteErp Login Page
    And User clicks to Repair module on Landing Page
    And User click to Create button
    And User cliks to customer field
    And User clicks create and edit field
    And User types elif in to name box
    And User clicks save button
    Then User should see elif in the customer field

