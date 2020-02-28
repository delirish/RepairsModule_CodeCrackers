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
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeTest4"
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
  "name": "User click to ProductToRepair button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_click_to_ProductToRepair_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to SearchMore button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_click_to_SearchMore_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see a list of products",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_should_be_able_to_see_a_list_of_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to Create/Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_click_to_Create_Edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see grey text \"Product name\"",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_should_see_grey_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to enter his name",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_should_be_able_to_enter_his_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to choose a ProductType",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_should_be_able_to_choose_a_ProductType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to enter an InternalReference",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_should_be_able_to_enter_an_InternalReference()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to enter a Barecode",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_should_be_able_to_enter_a_Barecode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to choose a Category",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_should_be_able_to_choose_a_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});