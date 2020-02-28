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

