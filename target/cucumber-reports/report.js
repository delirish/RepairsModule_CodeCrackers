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
});