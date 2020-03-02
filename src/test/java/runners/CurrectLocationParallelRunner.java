package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/parallel-cucumber4.json",
                "html:target/cucumber-reports"},
        features = "src/test/resources/features/currentLocation.feature",
        glue = "step_definitions"
)


public class CurrectLocationParallelRunner {


}
