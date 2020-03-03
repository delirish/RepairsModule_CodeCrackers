package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.NoSuchElementException;
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




    @Given("Manager is on Landing page")
    public void manager_is_on_Landing_page() throws InterruptedException{

      Driver.getDriver().get(Config.getProperty("briteErpUrl"));
      loginPage.emailInput.sendKeys(Config.getProperty("briteUserEmail"));
      loginPage.passwordInput.sendKeys(Config.getProperty("briteUserPassword"));
      loginPage.logInButton.click();



  }


    @Given("Manager clicks Repairs module to go to Repair Orders.")
    public void manager_clicks_Repairs_module_to_go_to_Repair_Orders() throws InterruptedException {
        Thread.sleep(3000);
        landingPage.repairsModuleButton.click();
        {

            //check if filter is already displayed or you need to click advanced search button in order to see it:
            try {
                if (repairsModulePage.advancedSearchButtonPlus.isDisplayed()) {
                    repairsModulePage.advancedSearchButtonPlus.click();
                }
            } catch (NoSuchElementException e) {
                e.printStackTrace();
            }
        }
    }

    @Given("Manager clicks main checkbox to select all checkboxes under.")
    public void manager_clicks_main_checkbox_to_select_all_checkboxes_under() throws InterruptedException{
        Thread.sleep(3000);

        repairsModulePage.selectAllCheckboxes.click();
    }

    @When("Manager clicks main checkbox to deselect all selected checkboxes under.")
    public void manager_clicks_main_checkbox_to_deselect_all_selected_checkboxes_under() throws InterruptedException{
      Thread.sleep(3000);
       repairsModulePage.deselectAllCheckboxes.click();
    }

    @When("Manager clicks the checkbox to sort list of clients references.")
    public void manager_clicks_the_checkbox_to_sort_list_of_clients_references() throws InterruptedException{
        Thread.sleep(3000);
        repairsModulePage.sortRepairReference.click();
    }

    @When("Manager clicks the checkbox to sort list of Products to Repair.")
    public void manager_clicks_the_checkbox_to_sort_list_of_Products_to_Repair() throws InterruptedException{
       Thread.sleep(3000);
        repairsModulePage.sortProductToReference.click();
    }

    @When("Manager clicks the checkbox  to sort list of Customers.")
    public void manager_clicks_the_checkbox_to_sort_list_of_Customers() throws InterruptedException{
        Thread.sleep(3000);
        repairsModulePage.sortCustomers.click();
    }

    @When("Manager clicks the checkbox to sort list of addresses to Deliver.")
    public void manager_clicks_the_checkbox_to_sort_list_of_addresses_to_Deliver() throws InterruptedException{
       Thread.sleep(3000);
        repairsModulePage.sortDeliveryAddress.click();
    }

    @When("Manager clicks checkbox to sort Status of orders.")
    public void manager_clicks_checkbox_to_sort_Status_of_orders() throws InterruptedException{
       Thread.sleep(3000);
        repairsModulePage.sortStatus.click();
    }

    @Then("Manager clicks the checkbox to sort Warranty Expiration dates.")
    public void manager_clicks_the_checkbox_to_sort_Warranty_Expiration_dates() throws InterruptedException{
      Thread.sleep(3000);
       repairsModulePage.sortWarrantyExpiration.click();
    }
}
