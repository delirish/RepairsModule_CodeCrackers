package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.LandingPage;
import pages.LoginPage;
import pages.RepairsModulePage;
import utilities.Config;
import utilities.Driver;

public class CurrentLocation {
    LoginPage loginPage = new LoginPage();
    @Given("User is on Landing page")
    public void user_is_on_Landing_page() {
        Driver.getDriver().get(Config.getProperty("brUrl"));
        RepairsModulePage repairsModulePage = new RepairsModulePage();
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 10);

        LandingPage landingPage = new LandingPage();

    }

    @When("User click to repairs module")
    public void user_click_to_repairs_module() {


    }

    @When("User click create button")
    public void user_click_create_button() {

    }

    @When("User click current location box")
    public void user_click_current_location_box() {

    }

    @When("User select create and edit from dropdown list")
    public void user_select_create_and_edit_from_dropdown_list() {

    }

    @Then("User sees pop-up page")
    public void user_sees_pop_up_page() {

    }

}
