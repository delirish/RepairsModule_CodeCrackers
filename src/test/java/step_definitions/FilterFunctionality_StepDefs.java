package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.LandingPage;
import pages.LoginPage;
import pages.RepairsModulePage;
import utilities.Config;
import utilities.Driver;
import utilities.SeleniumUtils;

import java.util.List;

public class FilterFunctionality_StepDefs {
    LoginPage loginPage = new LoginPage();
    LandingPage landingPage = new LandingPage();
    RepairsModulePage repairsModulePage = new RepairsModulePage();
    WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 10);

    @Given("User is on the Landing page")
    public void user_is_on_the_Landing_page() {

        Driver.getDriver().get(Config.getProperty("briteErpUrl"));
        loginPage.emailInput.sendKeys(Config.getProperty("briteUserEmail"));
        loginPage.passwordInput.sendKeys(Config.getProperty("briteUserPassword"));
        loginPage.logInButton.click();

    }

    @When("User clicks Repairs module")
    public void user_clicks_Repairs_module() {

        landingPage.repairsModuleButton.click();

        //check if filter is already displayed or you need to click advanced search button in order to see it:
       try {
           if (repairsModulePage.advancedSearchButtonPlus.isDisplayed()) {
               repairsModulePage.advancedSearchButtonPlus.click();
           }
       }catch (NoSuchElementException e){
           e.printStackTrace();
       }
    }

    @When("User clicks Filters button")
    public void user_clicks_Filters_button() throws InterruptedException {

        Thread.sleep(3000);

        //verify if filters button is displayed:
        Assert.assertTrue("Filters button is not displayed. FAIL", repairsModulePage.filtersButton.isDisplayed());

        //click the filter button:
        repairsModulePage.filtersButton.click();

        //verify if filter dropdown menu is displayed:
        Assert.assertTrue("Filters dropdown menu is not displayed. FAIL", repairsModulePage.filtersDropdownMenu.isDisplayed());
    }






//QUOTATIONS FILTER---------------------------------------------------------------------------------

    @When("User selects Quotations filter")
    public void user_selects_Quotations_filter() {

        repairsModulePage.quotationsFilter.click();
    }

    @Then("User should be able to see only corresponding to Quotations filter repair orders in the list")
    public void user_should_be_able_to_see_only_corresponding_to_Quotations_filter_repair_orders_in_the_list() throws InterruptedException {

        //get the filtered list of repairs orders':
        List<WebElement> filteredOrdersStatusList = repairsModulePage.quotationsListOfOrders;

        //wait until the filter is selected:
        Thread.sleep(3000);

        //verify if list contains only filtered orders:
        for(WebElement element: filteredOrdersStatusList){

            Assert.assertTrue("Filtered orders list contains options that do not correspond to this filter", repairsModulePage.quotationsFilter.getText().contains(element.getText()));
        }
    }

    @Then("User should see Quotations filter in the Search box")
    public void user_should_see_Quotations_filter_in_the_Search_box() {

        //verify if filter is displayed in a search box:
        Assert.assertTrue("\"Quotations\" filter option is not displayed in Search box. FAIL",repairsModulePage.quotationsFilterInSearchBox.isDisplayed());
    }

    @Then("User should be able to see Quotations filter as selected in Filters dropdown menu")
    public void user_should_be_able_to_see_Quotations_filter_as_selected_in_Filters_dropdown_menu() {

        //verify if filter is selected in the list:
        Assert.assertTrue("\"Quotations\" filter option is not selected. FAIL",repairsModulePage.quotationsFilterSelectionCheckMark.getAttribute("class").equals("selected"));
    }

    @When("User deselects Quotations filter")
    public void user_deselects_Quotations_filter() {

        //click the filter once again to deselect:
        repairsModulePage.quotationsFilter.click();

    }

    @Then("User should be able to see all repair orders in the list")
    public void user_should_be_able_to_see_all_repair_orders_in_the_list() {

        //create a list to store the orders after the filter is deselected:
        List<WebElement> finalOrdersStatusList = repairsModulePage.listOfOrders;

        //verify that the list contains all of the orders as before the filter selection and deselection:
        Assert.assertTrue("Lists do not match. Verification FAILED", repairsModulePage.listOfOrders.toString().equals(finalOrdersStatusList.toString()));

    }

    @Then("User should not see Quotations filter in the Search box")
    public void user_should_not_see_Quotations_filter_in_the_Search_box() {

        try{
            Assert.assertFalse("\"Quotations\" filter option is displayed in Search box", repairsModulePage.quotationsFilterInSearchBox.isDisplayed());
        }catch (NoSuchElementException e){
            System.out.println("Element is no longer displayed in the Search box. Verification PASSED");
        }
    }

    @Then("User should be able to see Quotations filter as deselected in Filters dropdown menu")
    public void user_should_be_able_to_see_Quotations_filter_as_deselected_in_Filters_dropdown_menu() {

        Assert.assertTrue("\"Quotations\" filter option is selected", repairsModulePage.quotationsFilterSelectionCheckMark.getAttribute("class").isEmpty());

    }






//CONFIRMED FILTER---------------------------------------------------------------------------------

    @When("User selects Confirmed filter")
    public void user_selects_Confirmed_filter() {

        repairsModulePage.confirmedFilter.click();
    }

    @Then("User should be able to see only corresponding to Confirmed filter repair orders in the list")
    public void user_should_be_able_to_see_only_corresponding_to_Confirmed_filter_repair_orders_in_the_list() throws InterruptedException {

        //get the filtered list of repairs orders':
        List<WebElement> filteredOrdersStatusList = repairsModulePage.confirmedListOfOrders;

        //wait until the filter is selected:
        Thread.sleep(3000);

        //verify if list contains only filtered orders:
        for(WebElement element: filteredOrdersStatusList){

            Assert.assertTrue("Filtered orders list contains options that do not correspond to this filter", repairsModulePage.confirmedFilter.getText().contains(element.getText()));
        }
    }

    @Then("User should see Confirmed filter in the Search box")
    public void user_should_see_Confirmed_filter_in_the_Search_box() {

        //verify if filter is displayed in a search box:
        Assert.assertTrue("\"Confirmed\" filter option is not displayed in Search box. FAIL", repairsModulePage.confirmedFilterInSearchBox.isDisplayed());

    }

    @Then("User should be able to see Confirmed filter as selected in Filters dropdown menu")
    public void user_should_be_able_to_see_Confirmed_filter_as_selected_in_Filters_dropdown_menu() {

        //verify if filter is selected in the list:
        Assert.assertTrue("\"Confirmed\" filter option is not selected. FAIL", repairsModulePage.confirmedFilterSelectionCheckMark.getAttribute("class").equals("selected"));

    }

    @When("User deselects Confirmed filter")
    public void user_deselects_Confirmed_filter() {

        //click the filter once again to deselect:
        repairsModulePage.confirmedFilter.click();
    }

    @Then("User should not see Confirmed filter in the Search box")
    public void user_should_not_see_Confirmed_filter_in_the_Search_box() {
        try{
            Assert.assertFalse("\"Confirmed\" filter option is displayed in Search box", repairsModulePage.confirmedFilterInSearchBox.isDisplayed());
        }catch (NoSuchElementException e){
            System.out.println("Element is no longer displayed in the Search box. Verification PASSED");
        }

    }

    @Then("User should be able to see Confirmed filter as deselected in Filters dropdown menu")
    public void user_should_be_able_to_see_Confirmed_filter_as_deselected_in_Filters_dropdown_menu() {

        Assert.assertTrue("\"Confirmed\" filter option is selected", repairsModulePage.confirmedFilterSelectionCheckMark.getAttribute("class").isEmpty());

    }




//READY TO REPAIR FILTER---------------------------------------------------------------------------------

    @When("User selects Ready to Repair filter")
    public void user_selects_Ready_to_Repair_filter() {

        repairsModulePage.readyToRepairFilter.click();
    }

    @Then("User should be able to see only corresponding to Ready to Repair filter repair orders in the list")
    public void user_should_be_able_to_see_only_corresponding_to_Ready_to_Repair_filter_repair_orders_in_the_list() throws InterruptedException {


        //get the filtered list of repairs orders':
        List<WebElement> filteredOrdersStatusList = repairsModulePage.readyToRepairListOfOrders;

        //wait until the filter is selected:
        Thread.sleep(3000);

        //verify if list contains only filtered orders:
        for(WebElement element: filteredOrdersStatusList){

            Assert.assertTrue("Filtered orders list contains options that do not correspond to this filter", repairsModulePage.readyToRepairFilter.getText().equalsIgnoreCase(element.getText()));
        }
    }

    @Then("User should see Ready to Repair filter in the Search box")
    public void user_should_see_Ready_to_Repair_filter_in_the_Search_box() {
        //verify if filter is displayed in a search box:
        Assert.assertTrue("\"Ready to Repair\" filter option is not displayed in Search box. FAIL", repairsModulePage.readyToRepairFilterInSearchBox.isDisplayed());

    }

    @Then("User should be able to see Ready to Repair filter as selected in Filters dropdown menu")
    public void user_should_be_able_to_see_Ready_to_Repair_filter_as_selected_in_Filters_dropdown_menu() {

        //verify if filter is selected in the list:
        Assert.assertTrue("\"Ready to Repair\" filter option is not selected. FAIL", repairsModulePage.readyToRepairFilterSelectionCheckMark.getAttribute("class").equals("selected"));

    }

    @When("User deselects Ready to Repair filter")
    public void user_deselects_Ready_to_Repair_filter() {

        //click the filter once again to deselect:
        repairsModulePage.readyToRepairFilter.click();
    }

    @Then("User should not see Ready to Repair filter in the Search box")
    public void user_should_not_see_Ready_to_Repair_filter_in_the_Search_box() {

        try{
            Assert.assertFalse("\"Ready to Repair\" filter option is displayed in Search box", repairsModulePage.readyToRepairFilterInSearchBox.isDisplayed());
        }catch (NoSuchElementException e){
            System.out.println("Element is no longer displayed in the Search box. Verification PASSED");
        }
    }

    @Then("User should be able to see Ready to Repair filter as deselected in Filters dropdown menu")
    public void user_should_be_able_to_see_Ready_to_Repair_filter_as_deselected_in_Filters_dropdown_menu() {

        Assert.assertTrue("\"Ready to Repair\" filter option is selected", repairsModulePage.readyToRepairFilterSelectionCheckMark.getAttribute("class").isEmpty());

    }
}
