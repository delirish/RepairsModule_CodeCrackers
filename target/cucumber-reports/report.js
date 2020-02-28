$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/repairsModule.feature");
formatter.feature({
  "name": "Repairs Module Verification",
  "description": "  Agile story: As a User I should be able to access repairs list, search for repair, create/edit/delete a repair",
  "keyword": "Feature"
});
formatter.background({
  "name": "Given User is on Landing page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CurrentLocation.user_is_on_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Customer Dropdown Verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeTest1"
    }
  ]
});
formatter.step({
  "name": "User is logged in to briteErp Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_is_logged_in_to_briteErp_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to Repair module on Landing Page",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_clicks_to_Repair_module_on_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to Create button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_click_to_Create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types \"elif\" to Customer field",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_types_to_Customer_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see \"elif\" in the dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_should_see_in_the_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given User is on Landing page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CurrentLocation.user_is_on_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Customer : Search header verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeTest2"
    }
  ]
});
formatter.step({
  "name": "User is logged in to briteErp Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_is_logged_in_to_briteErp_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to Repair module on Landing Page",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_clicks_to_Repair_module_on_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to Create button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_click_to_Create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cliks to customer field",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_cliks_to_customer_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cliks Search more field",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_cliks_Search_more_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Search:customer header",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_should_see_Search_customer_header()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given User is on Landing page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CurrentLocation.user_is_on_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeTest3"
    }
  ]
});
formatter.step({
  "name": "User is logged in to briteErp Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_is_logged_in_to_briteErp_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to Repair module on Landing Page",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_clicks_to_Repair_module_on_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to Create button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_click_to_Create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cliks to customer field",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_cliks_to_customer_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks create and edit field",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_clicks_create_and_edit_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types elif in to name box",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_types_elif_in_to_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see elif in the customer field",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_should_see_elif_in_the_customer_field()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});