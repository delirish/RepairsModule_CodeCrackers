$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/customerFunctionality.feature");
formatter.feature({
  "name": "Repairs Module Verification",
  "description": "  Agile story: As a User I should be able to access repairs list, search for repair, create/edit/delete a repair",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Customer Dropdown Verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
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
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ms-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:14a8:4e35:f430:c45%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zq/fr1t2l9x09n...}, goog:chromeOptions: {debuggerAddress: localhost:61745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 152d42584440310a1e5bff0f205a48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat step_definitions.CustomerField_StepDefs.user_is_logged_in_to_briteErp_Login_Page(CustomerField_StepDefs.java:27)\n\tat ✽.User is logged in to briteErp Login Page(src/test/resources/features/customerFunctionality.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Customer : Search header verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User clicks to Repair module on Landing Page",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_clicks_to_Repair_module_on_Landing_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click to Create button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_click_to_Create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User cliks to customer field",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_cliks_to_customer_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User cliks Search more field",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_cliks_Search_more_field()"
});
formatter.result({
  "status": "skipped"
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
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ms-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:14a8:4e35:f430:c45%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zq/fr1t2l9x09n...}, goog:chromeOptions: {debuggerAddress: localhost:61745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 152d42584440310a1e5bff0f205a48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat step_definitions.Hooks.tearDown(Hooks.java:30)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ms-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:14a8:4e35:f430:c45%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zq/fr1t2l9x09n...}, goog:chromeOptions: {debuggerAddress: localhost:61745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 152d42584440310a1e5bff0f205a48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat step_definitions.CustomerField_StepDefs.user_is_logged_in_to_briteErp_Login_Page(CustomerField_StepDefs.java:27)\n\tat ✽.User is logged in to briteErp Login Page(src/test/resources/features/customerFunctionality.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Create and edit functionality verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User clicks to Repair module on Landing Page",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_clicks_to_Repair_module_on_Landing_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click to Create button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_click_to_Create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User cliks to customer field",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_cliks_to_customer_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks create and edit field",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_clicks_create_and_edit_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User types elif in to name box",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_types_elif_in_to_name_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_clicks_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see elif in the customer field",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_should_see_elif_in_the_customer_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ms-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:14a8:4e35:f430:c45%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zq/fr1t2l9x09n...}, goog:chromeOptions: {debuggerAddress: localhost:61745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 152d42584440310a1e5bff0f205a48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat step_definitions.Hooks.tearDown(Hooks.java:30)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\n",
  "status": "failed"
});
formatter.uri("src/test/resources/features/filterFunctionality.feature");
formatter.feature({
  "name": "Filter Functionality for Search Repair Orders Verification",
  "description": "  Agile story: As a User I should be able to filter the repair orders",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_is_on_the_Landing_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ms-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:14a8:4e35:f430:c45%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zq/fr1t2l9x09n...}, goog:chromeOptions: {debuggerAddress: localhost:61745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 152d42584440310a1e5bff0f205a48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat step_definitions.FilterFunctionality_StepDefs.user_is_on_the_Landing_page(FilterFunctionality_StepDefs.java:28)\n\tat ✽.User is on the Landing page(src/test/resources/features/filterFunctionality.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "COD-196 Quotations Filter for Repair Orders Verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User clicks Repairs module",
  "keyword": "When "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_clicks_Repairs_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Filters button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_clicks_Filters_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects Quotations filter",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_selects_Quotations_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see only corresponding to Quotations filter repair orders in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_be_able_to_see_only_corresponding_to_Quotations_filter_repair_orders_in_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Quotations filter in the Search box",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_see_Quotations_filter_in_the_Search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see Quotations filter as selected in Filters dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_be_able_to_see_Quotations_filter_as_selected_in_Filters_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deselects Quotations filter",
  "keyword": "When "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_deselects_Quotations_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see all repair orders in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_be_able_to_see_all_repair_orders_in_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should not see Quotations filter in the Search box",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_not_see_Quotations_filter_in_the_Search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see Quotations filter as deselected in Filters dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_be_able_to_see_Quotations_filter_as_deselected_in_Filters_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ms-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:14a8:4e35:f430:c45%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zq/fr1t2l9x09n...}, goog:chromeOptions: {debuggerAddress: localhost:61745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 152d42584440310a1e5bff0f205a48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat step_definitions.Hooks.tearDown(Hooks.java:30)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_is_on_the_Landing_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ms-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:14a8:4e35:f430:c45%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zq/fr1t2l9x09n...}, goog:chromeOptions: {debuggerAddress: localhost:61745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 152d42584440310a1e5bff0f205a48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat step_definitions.FilterFunctionality_StepDefs.user_is_on_the_Landing_page(FilterFunctionality_StepDefs.java:28)\n\tat ✽.User is on the Landing page(src/test/resources/features/filterFunctionality.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "COD-223 Confirmed Filter for Repair Orders Verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User clicks Repairs module",
  "keyword": "When "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_clicks_Repairs_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Filters button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_clicks_Filters_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects Confirmed filter",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_selects_Confirmed_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see only corresponding to Confirmed filter repair orders in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_be_able_to_see_only_corresponding_to_Confirmed_filter_repair_orders_in_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Confirmed filter in the Search box",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_see_Confirmed_filter_in_the_Search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see Confirmed filter as selected in Filters dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_be_able_to_see_Confirmed_filter_as_selected_in_Filters_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deselects Confirmed filter",
  "keyword": "When "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_deselects_Confirmed_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see all repair orders in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_be_able_to_see_all_repair_orders_in_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should not see Confirmed filter in the Search box",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_not_see_Confirmed_filter_in_the_Search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see Confirmed filter as deselected in Filters dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_be_able_to_see_Confirmed_filter_as_deselected_in_Filters_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ms-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:14a8:4e35:f430:c45%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zq/fr1t2l9x09n...}, goog:chromeOptions: {debuggerAddress: localhost:61745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 152d42584440310a1e5bff0f205a48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat step_definitions.Hooks.tearDown(Hooks.java:30)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_is_on_the_Landing_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ms-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:14a8:4e35:f430:c45%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zq/fr1t2l9x09n...}, goog:chromeOptions: {debuggerAddress: localhost:61745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 152d42584440310a1e5bff0f205a48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat step_definitions.FilterFunctionality_StepDefs.user_is_on_the_Landing_page(FilterFunctionality_StepDefs.java:28)\n\tat ✽.User is on the Landing page(src/test/resources/features/filterFunctionality.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "COD-226 Ready to Repair Filter for Repair Orders Verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User clicks Repairs module",
  "keyword": "When "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_clicks_Repairs_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Filters button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_clicks_Filters_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects Ready to Repair filter",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_selects_Ready_to_Repair_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see only corresponding to Ready to Repair filter repair orders in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_be_able_to_see_only_corresponding_to_Ready_to_Repair_filter_repair_orders_in_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Ready to Repair filter in the Search box",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_see_Ready_to_Repair_filter_in_the_Search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see Ready to Repair filter as selected in Filters dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_be_able_to_see_Ready_to_Repair_filter_as_selected_in_Filters_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deselects Ready to Repair filter",
  "keyword": "When "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_deselects_Ready_to_Repair_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see all repair orders in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_be_able_to_see_all_repair_orders_in_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should not see Ready to Repair filter in the Search box",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_not_see_Ready_to_Repair_filter_in_the_Search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see Ready to Repair filter as deselected in Filters dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "FilterFunctionality_StepDefs.user_should_be_able_to_see_Ready_to_Repair_filter_as_deselected_in_Filters_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ms-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:14a8:4e35:f430:c45%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zq/fr1t2l9x09n...}, goog:chromeOptions: {debuggerAddress: localhost:61745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 152d42584440310a1e5bff0f205a48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat step_definitions.Hooks.tearDown(Hooks.java:30)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\n",
  "status": "failed"
});
formatter.uri("src/test/resources/features/productToRepair.feature");
formatter.feature({
  "name": "Product to repair feature",
  "description": "  Agile story: As a User I should be able to access repairs list, search for repair, create/edit/delete a repair",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ms-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:14a8:4e35:f430:c45%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zq/fr1t2l9x09n...}, goog:chromeOptions: {debuggerAddress: localhost:61745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 152d42584440310a1e5bff0f205a48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat step_definitions.CustomerField_StepDefs.user_is_logged_in_to_briteErp_Login_Page(CustomerField_StepDefs.java:27)\n\tat ✽.User is logged in to briteErp Login Page(src/test/resources/features/productToRepair.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to Repair module on Landing Page",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_clicks_to_Repair_module_on_Landing_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click to Create button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerField_StepDefs.user_click_to_Create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click to ProductToRepair button",
  "keyword": "And "
});
formatter.match({
  "location": "ProductToRepair_StepDefs.user_click_to_ProductToRepair_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click to SearchMore button",
  "keyword": "And "
});
formatter.match({
  "location": "ProductToRepair_StepDefs.user_click_to_SearchMore_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see a list of products",
  "keyword": "And "
});
formatter.match({
  "location": "ProductToRepair_StepDefs.user_should_be_able_to_see_a_list_of_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click to Create/Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "ProductToRepair_StepDefs.user_click_to_Create_Edit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see grey text \"Product name\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductToRepair_StepDefs.user_should_see_grey_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to enter his name",
  "keyword": "And "
});
formatter.match({
  "location": "ProductToRepair_StepDefs.user_should_be_able_to_enter_his_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to choose a ProductType",
  "keyword": "And "
});
formatter.match({
  "location": "ProductToRepair_StepDefs.user_should_be_able_to_choose_a_ProductType()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to enter an InternalReference",
  "keyword": "And "
});
formatter.match({
  "location": "ProductToRepair_StepDefs.user_should_be_able_to_enter_an_InternalReference()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to enter a Barecode",
  "keyword": "And "
});
formatter.match({
  "location": "ProductToRepair_StepDefs.user_should_be_able_to_enter_a_Barecode()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to choose a Category",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductToRepair_StepDefs.user_should_be_able_to_choose_a_Category()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ms-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:14a8:4e35:f430:c45%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zq/fr1t2l9x09n...}, goog:chromeOptions: {debuggerAddress: localhost:61745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 152d42584440310a1e5bff0f205a48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat step_definitions.Hooks.tearDown(Hooks.java:30)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\n",
  "status": "failed"
});
});