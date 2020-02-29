Feature: Repairs Module Verification
  Agile story: As a User I should be able to access repairs list, search for repair, create/edit/delete a repair

  Background: Given User is on Landing page


  @test1
  Scenario: Current location "Create and edit" verification
    Given User is on Landing page
    When User click to repairs module
    And User click create button
    And User click current location box
    And User select create and edit from dropdown list
    Then User sees pop-up page

  @test2
  Scenario: Current location "Search more" verification
    Given User is on Landing page
    When User click to repairs module
    And User click create button
    And User click current location box
    And User select search more from dropdown list
    Then User sees header Search: Delivery Location
  