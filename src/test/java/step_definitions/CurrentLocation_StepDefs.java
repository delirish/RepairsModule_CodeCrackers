package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.LandingPage;
import pages.LoginPage;
import pages.RepairsModulePage;
import utilities.Config;
import utilities.Driver;

public class CurrentLocation_StepDefs {
    LoginPage loginPage = new LoginPage();
    LandingPage landingPage = new LandingPage();
    RepairsModulePage repairsModulePage = new RepairsModulePage();



    @Given("User is on Landing page")
    public void user_is_on_Landing_page() throws InterruptedException {
        Driver.getDriver().get(Config.getProperty("brUrl"));
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 10);
        loginPage.emailInput.sendKeys(Config.getProperty("briteMUsername"));
        loginPage.passwordInput.sendKeys(Config.getProperty("briteMPassword"));
        loginPage.logInButton.click();
        Thread.sleep(5000);


    }

    @When("User click to repairs module")
    public void user_click_to_repairs_module() throws InterruptedException {
        Thread.sleep(5000);
        landingPage.repairsModuleButton.click();
        Thread.sleep(3000);
    }

    @When("User click create button")
    public void user_click_create_button() {
        repairsModulePage.RepairOrderCreateButton.click();



    }

    @When("User click current location box")
    public void user_click_current_location_box() {
        repairsModulePage.currentLocationBox.click();

    }

    @When("User select create and edit from dropdown list")
    public void user_select_create_and_edit_from_dropdown_list() {
        repairsModulePage.currentLocationCreateAndEdit.click();

    }

    @Then("User sees pop-up page")
    public void user_sees_pop_up_page() {
        Assert.assertTrue(repairsModulePage.currentLocationCreateAndEditPagePopUp.isDisplayed());


    }

    @When("User select search more from dropdown list")
    public void user_select_search_more_from_dropdown_list() {
        repairsModulePage.currentLocationSearchMore.click();

    }


    @Then("User sees header Search: Delivery Location")
    public void user_sees_header_Search_Delivery_Location() {
        Assert.assertTrue(repairsModulePage.currentLocationSearchMoreSearchPopUp.isDisplayed());
    }




}
