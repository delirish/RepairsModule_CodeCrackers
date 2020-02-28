@smoke
Feature: Repair orders Verification
  Agile story: As a Manager I should be able to access Repair Orders page on Repairs Module.

  Background: Given Manager is on Landing page

#Put your scenarios/scenario outlines below:


  Scenario: Main checkbox verification.
    When Manager should be able to click main checkbox to select all checkboxes under.
    Then Manager should be able to click main checkbox to unselect all selected checkboxes under.




  Scenario: Repair Reference column verification.
    When Manager should be able to see list of clients references in Repair Reference column.
    And Manager should be able to click the checkbox to sort list of clients references.
    Then Manager should be able to manage sorting checkbox.



  Scenario: Product list verification.
    When Manager should be able to see list of Products to Repair.
    And Manager should be able to click the checkbox to sort list of Products to Repair.
    Then Manager should be able to manage sorting checkbox.



    Scenario: Customer list verification.
      When Manager should be able to see list of Customers.
      And Manager should be able to click the checkbox  to sort list of Customers.
      Then Manager should be able to manage sorting checkbox.



    Scenario: Address list verification.
      When Manager should be able to see list of addresses to Deliver.
      And Manager should be able to click the checkbox to sort list of adresses to Deliver.
      Then Manager should be able to manage sorting checkbox.



    Scenario: Status of orders verification.
      When Manager should be able to see Status of orders.
      And Manager should be able to click checkbox to sort Status of orders.
      Then Manager should be able to manage sorting checkbox.



     Scenario: Warranty expiration verification.
       When Manager should be able to see dates of Warranty Expiration.
       And Manager should be able to click the checkbox to sort Warranty Expiration
       Then Manager should be able to manage sorting checkbox.
