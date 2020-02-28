$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/productToRepair.feature");
formatter.feature({
  "name": "Product to repair feature",
  "description": "  Agile story: As a User I should be able to access repairs list, search for repair, create/edit/delete a repair",
  "keyword": "Feature"
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
formatter.before({
  "status": "passed"
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
formatter.uri("src/test/resources/features/repairsModule.feature");
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
formatter.background({
  "name": "Given User is on Landing page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
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
  "error_message": "java.lang.NullPointerException\n\tat step_definitions.CustomerField_StepDefs.user_cliks_Search_more_field(CustomerField_StepDefs.java:82)\n\tat ✽.User cliks Search more field(src/test/resources/features/repairsModule.feature:21)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should see Search:customer header",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_should_see_Search_customer_header()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
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