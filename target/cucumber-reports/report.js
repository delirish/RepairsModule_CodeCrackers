$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/currentLocation.feature");
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
  "name": "Current location \"Create and edit\" verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "User is on Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_is_on_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to repairs module",
  "keyword": "When "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_click_to_repairs_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click create button",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click current location box",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_click_current_location_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select create and edit from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_select_create_and_edit_from_dropdown_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees pop-up page",
  "keyword": "Then "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_sees_pop_up_page()"
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
  "name": "Current location \"Search more\" verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test2"
    }
  ]
});
formatter.step({
  "name": "User is on Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_is_on_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to repairs module",
  "keyword": "When "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_click_to_repairs_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click create button",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click current location box",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_click_current_location_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select search more from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_select_search_more_from_dropdown_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees header Search: Delivery Location",
  "keyword": "Then "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_sees_header_Search_Delivery_Location()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});