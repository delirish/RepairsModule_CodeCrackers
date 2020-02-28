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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#login\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anvars-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:83:14fe:b3f5:81c5%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/0r/rrs1rwd94h3...}, goog:chromeOptions: {debuggerAddress: localhost:57233}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1695ea5ad7009f4b9a2b7e78a226ff0f\n*** Element info: {Using\u003did, value\u003dlogin}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\n\tat step_definitions.CurrentLocation_StepDefs.user_is_on_Landing_page(CurrentLocation_StepDefs.java:25)\n\tat ✽.User is on Landing page(src/test/resources/features/currentLocation.feature:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click to repairs module",
  "keyword": "When "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_click_to_repairs_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click create button",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_click_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click current location box",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_click_current_location_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select search more from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_select_search_more_from_dropdown_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees header Search: Delivery Location",
  "keyword": "Then "
});
formatter.match({
  "location": "CurrentLocation_StepDefs.user_sees_header_Search_Delivery_Location()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});