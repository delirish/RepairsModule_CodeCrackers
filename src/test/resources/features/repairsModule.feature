Feature: Repairs Module Verification
  Agile story: As a User I should be able to access repairs list, search for repair, create/edit/delete a repair

  Background: Given User is on Landing page

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

    @smokeTest4
    Scenario:
      Given User is logged in to briteErp Login Page
      And User clicks to Repair module on Landing Page
      And User click to Create button
      And User click to ProductToRepair button
      And User click to SearchMore button
      And User should be able to see a list of products
      And User click to Create/Edit button
      And User should see grey text "Product name"
      And User should be able to enter his name
      And User should be able to choose a ProductType
      And User should be able to enter an InternalReference
      And User should be able to enter a Barecode
      Then User should be able to choose a Category

