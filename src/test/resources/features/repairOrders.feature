@smoke
Feature:Repair orders verification.
  Agile story: As a User I should be able to access repairs list, search for repair, create/edit/delete a repair

  Background: Given Manager is on Landing page
    Given Manager is on Landing page


  Scenario: Check all checkboxes on Repair orders page on Repairs module.
      When Manager clicks Repairs module to go to Repair Orders.
    And Manager clicks main checkbox to select all checkboxes under.
  And Manager clicks main checkbox to deselect all selected checkboxes under.
    And Manager clicks the checkbox to sort list of clients references.
    And Manager clicks the checkbox to sort list of Products to Repair.
    And Manager clicks the checkbox  to sort list of Customers.
    And Manager clicks the checkbox to sort list of addresses to Deliver.
    And Manager clicks checkbox to sort Status of orders.
    Then Manager clicks the checkbox to sort Warranty Expiration dates.
