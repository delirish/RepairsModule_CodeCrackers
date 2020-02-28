package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = "html:target/cucumber-reports",
        features = "src/test/resources/features/",
        glue = "step_definitions",
        dryRun = false,
        tags = "@smokeTest1,@smokeTest2,@smokeTest3,@smokeTest4"  // we can pass more than one tag, ex: tags = "@smokeTest, @regressionTest"
)


public class CukesRunner {
}
