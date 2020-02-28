package step_definitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.LandingPage;
import pages.LoginPage;
import pages.RepairsModulePage;
import utilities.Config;
import utilities.Driver;

public class Hooks {
    @Before
    public void setUp(){

        //Anything you want to run before each scenario
    }

    @After
    public void tearDown(Scenario scenario){

        if(scenario.isFailed()){

            byte [] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");

        }
        Driver.getDriver().close();

    }



}
