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

public class RepairOrders_StepDefs {

    LoginPage loginPage = new LoginPage();
    LandingPage landingPage = new LandingPage();
    RepairsModulePage repairsModulePage = new RepairsModulePage();
    WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 10);



    @Given("User is on Landing page")
    public void user_is_on_Landing_page(){

      Driver.getDriver().get(Config.getProperty("briteErpUrl"));
      loginPage.login.sendKeys(Config.getProperty("briteManagerEmail"));
      loginPage.password.sendKeys(Config.getProperty("briteManagerPassword"));
      loginPage.clickButton.click();

  }



    @When("Manager clicks main checkbox to select all checkboxes under.")
    public void manager_clicks_main_checkbox_to_select_all_checkboxes_under() {
        repairsModulePage.selectAllCheckboxes.click();
    }

    @When("Manager clicks main checkbox to deselect all selected checkboxes under.")
    public void manager_clicks_main_checkbox_to_deselect_all_selected_checkboxes_under() {
       repairsModulePage.deselectAllCheckboxes.click();
    }

    @When("Manager clicks the checkbox to sort list of clients references.")
    public void manager_clicks_the_checkbox_to_sort_list_of_clients_references(){
        repairsModulePage.sortRepairReference.click();
    }

    @When("Manager clicks the checkbox to sort list of Products to Repair.")
    public void manager_clicks_the_checkbox_to_sort_list_of_Products_to_Repair() {
        repairsModulePage.sortProductToReference.click();
    }

    @When("Manager clicks the checkbox  to sort list of Customers.")
    public void manager_clicks_the_checkbox_to_sort_list_of_Customers() {
        repairsModulePage.sortCustomers.click();
    }

    @When("Manager clicks the checkbox to sort list of addresses to Deliver.")
    public void manager_clicks_the_checkbox_to_sort_list_of_addresses_to_Deliver() {
       repairsModulePage.sortDeliveryAddress.click();
    }

    @When("Manager clicks checkbox to sort Status of orders.")
    public void manager_clicks_checkbox_to_sort_Status_of_orders() {
        repairsModulePage.sortStatus.click();
    }

    @Then("Manager clicks the checkbox to sort Warranty Expiration dates.")
    public void manager_clicks_the_checkbox_to_sort_Warranty_Expiration_dates() {
       repairsModulePage.sortWarrantyExpiration.click();
    }
}
