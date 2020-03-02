$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/repairOrders.feature");
formatter.feature({
  "name": "Repair orders verification.",
  "description": "  Agile story: As a User I should be able to access repairs list, search for repair, create/edit/delete a repair",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke1"
    }
  ]
});
formatter.background({
  "name": "Given Manager is on Landing page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Manager is on Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "RepairOrders_StepDefs.manager_is_on_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check all checkboxes on Repair orders page on Repairs module.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke1"
    }
  ]
});
formatter.step({
  "name": "Manager clicks Repairs module to go to Repair Orders.",
  "keyword": "When "
});
formatter.match({
  "location": "RepairOrders_StepDefs.manager_clicks_Repairs_module_to_go_to_Repair_Orders()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks main checkbox to select all checkboxes under.",
  "keyword": "And "
});
formatter.match({
  "location": "RepairOrders_StepDefs.manager_clicks_main_checkbox_to_select_all_checkboxes_under()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks main checkbox to deselect all selected checkboxes under.",
  "keyword": "And "
});
formatter.match({
  "location": "RepairOrders_StepDefs.manager_clicks_main_checkbox_to_deselect_all_selected_checkboxes_under()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks the checkbox to sort list of clients references.",
  "keyword": "And "
});
formatter.match({
  "location": "RepairOrders_StepDefs.manager_clicks_the_checkbox_to_sort_list_of_clients_references()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks the checkbox to sort list of Products to Repair.",
  "keyword": "And "
});
formatter.match({
  "location": "RepairOrders_StepDefs.manager_clicks_the_checkbox_to_sort_list_of_Products_to_Repair()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks the checkbox  to sort list of Customers.",
  "keyword": "And "
});
formatter.match({
  "location": "RepairOrders_StepDefs.manager_clicks_the_checkbox_to_sort_list_of_Customers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks the checkbox to sort list of addresses to Deliver.",
  "keyword": "And "
});
formatter.match({
  "location": "RepairOrders_StepDefs.manager_clicks_the_checkbox_to_sort_list_of_addresses_to_Deliver()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks checkbox to sort Status of orders.",
  "keyword": "And "
});
formatter.match({
  "location": "RepairOrders_StepDefs.manager_clicks_checkbox_to_sort_Status_of_orders()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks the checkbox to sort Warranty Expiration dates.",
  "keyword": "Then "
});
formatter.match({
  "location": "RepairOrders_StepDefs.manager_clicks_the_checkbox_to_sort_Warranty_Expiration_dates()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});