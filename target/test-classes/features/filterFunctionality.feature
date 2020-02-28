Feature: Filter Functionality for Search Repair Orders Verification
  Agile story: As a User I should be able to filter the repair orders

  Background:
    Given User is on the Landing page

  @smoke
  Scenario: COD-196 Quotations Filter for Repair Orders Verification
    When User clicks Repairs module
    And User clicks Filters button
    And User selects Quotations filter
    Then User should be able to see only corresponding to Quotations filter repair orders in the list
    And User should see Quotations filter in the Search box
    And User should be able to see Quotations filter as selected in Filters dropdown menu
    When User deselects Quotations filter
    Then User should be able to see all repair orders in the list
    And User should not see Quotations filter in the Search box
    And User should be able to see Quotations filter as deselected in Filters dropdown menu

  @smoke
  Scenario: COD-223 Confirmed Filter for Repair Orders Verification
    When User clicks Repairs module
    And User clicks Filters button
    And User selects Confirmed filter
    Then User should be able to see only corresponding to Confirmed filter repair orders in the list
    And User should see Confirmed filter in the Search box
    And User should be able to see Confirmed filter as selected in Filters dropdown menu
    When User deselects Confirmed filter
    Then User should be able to see all repair orders in the list
    And User should not see Confirmed filter in the Search box
    And User should be able to see Confirmed filter as deselected in Filters dropdown menu

  @smoke
  Scenario: COD-226 Ready to Repair Filter for Repair Orders Verification
    When User clicks Repairs module
    And User clicks Filters button
    And User selects Ready to Repair filter
    Then User should be able to see only corresponding to Ready to Repair filter repair orders in the list
    And User should see Ready to Repair filter in the Search box
    And User should be able to see Ready to Repair filter as selected in Filters dropdown menu
    When User deselects Ready to Repair filter
    Then User should be able to see all repair orders in the list
    And User should not see Ready to Repair filter in the Search box
    And User should be able to see Ready to Repair filter as deselected in Filters dropdown menu

