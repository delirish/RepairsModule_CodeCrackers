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
  "name": "Current location \"Create and edit\" verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@currentLocationCreateAndEdit"
    }
  ]
});
formatter.step({
  "name": "User click to repairs module",
  "keyword": "When "
});
formatter.match({
  "location": "CurrentLocation.user_click_to_repairs_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click create button",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation.user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click current location box",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation.user_click_current_location_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select create and edit from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation.user_select_create_and_edit_from_dropdown_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees pop-up page",
  "keyword": "Then "
});
formatter.match({
  "location": "CurrentLocation.user_sees_pop_up_page()"
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
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anvars-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:83:14fe:b3f5:81c5%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/0r/rrs1rwd94h3...}, goog:chromeOptions: {debuggerAddress: localhost:63322}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 113969c63cf8ab7425a9091091c973f0\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat step_definitions.CurrentLocation.user_is_on_Landing_page(CurrentLocation.java:23)\n\tat ✽.User is on Landing page(src/test/resources/features/repairsModule.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Current location \"Search more\" verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@currentLocationSearchMore"
    }
  ]
});
formatter.step({
  "name": "User click to repairs module",
  "keyword": "When "
});
formatter.match({
  "location": "CurrentLocation.user_click_to_repairs_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click create button",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation.user_click_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click current location box",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocation.user_click_current_location_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select search more from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "CurrentLocationSearchMore.user_select_search_more_from_dropdown_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see pop up page",
  "keyword": "Then "
});
formatter.match({
  "location": "CurrentLocationSearchMore.user_see_pop_up_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anvars-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:83:14fe:b3f5:81c5%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/0r/rrs1rwd94h3...}, goog:chromeOptions: {debuggerAddress: localhost:63322}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 113969c63cf8ab7425a9091091c973f0\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat step_definitions.Hooks.tearDown(Hooks.java:30)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
});