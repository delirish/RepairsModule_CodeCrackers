package step_definitions;

import com.github.javafaker.Faker;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.*;
import utilities.Config;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class CustomerField_StepDefs {
    LoginPage loginPage = new LoginPage();
    LandingPage landingPage = new LandingPage();
    CreateFeaturePage createFeaturePage = new CreateFeaturePage();
    CustomerFieldPage customerFieldPage = new CustomerFieldPage();
    RepairsModulePage repairsModulePage = new RepairsModulePage();
    Faker faker = new Faker();
    WebDriver driver;

    @Given("User is logged in to briteErp Login Page")
    public void user_is_logged_in_to_briteErp_Login_Page() throws InterruptedException {
        Driver.getDriver().get(Config.getProperty("briteErpUrl"));
        loginPage.eMailAdd.sendKeys(Config.getProperty("ErpEmailAddress"));
        loginPage.passWord.sendKeys(Config.getProperty("ErpPassword"));
        loginPage.submitButton.click();
       Thread.sleep(3000);

    }

    @When("User clicks to Repair module on Landing Page")
    public void user_clicks_to_Repair_module_on_Landing_Page() throws InterruptedException {
        landingPage.repairsModuleButton.click();
        Thread.sleep(3000);



    }

    @When("User click to Create button")
    public void user_click_to_Create_button() throws InterruptedException {
        createFeaturePage.createFeatureButton.click();
        Thread.sleep(5000);



    }

    @When("User types {string} to Customer field")
    public void user_types_to_Customer_field(String name) throws InterruptedException {
        customerFieldPage.customerField1.sendKeys(name);
        Thread.sleep(3000);



    }

    @Then("User should see {string} in the dropdown")
    public void user_should_see_in_the_dropdown(String string) throws InterruptedException {
        for(WebElement lists : customerFieldPage.customerList){
            Assert.assertTrue(lists.getText().contains("elif"));
            Thread.sleep(3000);

        }

    }
    @Given("User cliks to customer field")
    public void user_cliks_to_customer_field() throws InterruptedException {
        customerFieldPage.customerField1.click();
        Thread.sleep(3000);
    }

    @Given("User cliks Search more field")
    public void user_cliks_Search_more_field() throws InterruptedException {
        customerFieldPage.searchMore.click();
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);

    }

    @Then("User should see Search:customer header")
    public void user_should_see_Search_customer_header() throws InterruptedException {
        String actualHeader = customerFieldPage.searchCustomerHeader.getText();
        Thread.sleep(5000);
        String expectedHeader = "Search: Customer";
        Assert.assertTrue(actualHeader.equals(expectedHeader));
        Thread.sleep(3000);


    }

    @Given("User clicks create and edit field")
    public void user_clicks_create_and_edit_field() throws InterruptedException {
        customerFieldPage.createAndEdit.click();
        Thread.sleep(5000);

    }

    @Given("User types elif in to name box")
    public void user_types_elif_in_to_name_box() throws InterruptedException {
        customerFieldPage.nameBox.sendKeys("elif");
        Thread.sleep(3000);

    }

    @Given("User clicks save button")
    public void user_clicks_save_button() throws InterruptedException {
        customerFieldPage.saveButton.click();
        Thread.sleep(3000);

    }

    @Then("User should see elif in the customer field")
    public void user_should_see_elif_in_the_customer_field() throws InterruptedException {
        String actualName = customerFieldPage.customerField1.getText();
        Thread.sleep(3000);
        String expectedName = "elif";
        System.out.println(actualName);
        Assert.assertTrue("it's not displayed",customerFieldPage.customerField1.isDisplayed());

    }

    @Given("User click to ProductToRepair button")
    public void user_click_to_ProductToRepair_button() throws InterruptedException {
        repairsModulePage.productRepairButton.click();
        Thread.sleep(3000);
        System.out.println("Checking if the product list is empty...");
        Assert.assertFalse("Test FAILED ! Product List is empty !",repairsModulePage.productsToRepair.isEmpty());
    }

    @Given("User click to SearchMore button")
    public void user_click_to_SearchMore_button() {
        repairsModulePage.searchMoreButton.click();
    }

    @Given("User should be able to see a list of products")
    public void user_should_be_able_to_see_a_list_of_products() throws InterruptedException {
        Thread.sleep(3000);
        System.out.println("Checking if the list is empty or not...");
        Assert.assertFalse("The list is Empty. Test FAILED",repairsModulePage.productsToRepair.isEmpty());
        repairsModulePage.closeSearchMorePage.click();
    }

    @Given("User click to Create\\/Edit button")
    public void user_click_to_Create_Edit_button() throws InterruptedException {
        Thread.sleep(3000);
        repairsModulePage.productRepairButton.click();
        Thread.sleep(3000);
        repairsModulePage.createAndEditButton.click();
    }

    @Given("User should see grey text {string}")
    public void user_should_see_grey_text(String string) throws InterruptedException {
        Thread.sleep(3000);
        System.out.println("Checking if grey text is displayed...");
        Assert.assertTrue("Grey Text is NOT displayed. Test FAILED",repairsModulePage.greyText.isDisplayed());
    }

    @Given("User should be able to enter his name")
    public void user_should_be_able_to_enter_his_name() {
        repairsModulePage.inputProductName.sendKeys(faker.pokemon().name());
    }

    @Given("User should be able to choose a ProductType")
    public void user_should_be_able_to_choose_a_ProductType() {
        Select dropdownProductType = new Select(repairsModulePage.productTypeButton);
        dropdownProductType.selectByVisibleText("Service");
    }

    @Given("User should be able to enter an InternalReference")
    public void user_should_be_able_to_enter_an_InternalReference() throws InterruptedException {
        Thread.sleep(3000);
        repairsModulePage.internalReferenceTextBox.sendKeys(faker.name().firstName());
    }

    @Given("User should be able to enter a Barecode")
    public void user_should_be_able_to_enter_a_Barecode() {
        repairsModulePage.bareCodeBoxText.sendKeys("123456L");
    }

    @Then("User should be able to choose a Category")
    public void user_should_be_able_to_choose_a_Category() throws InterruptedException {
        Thread.sleep(3000);
        System.out.println("Checking if Category List is empty...");
        Assert.assertFalse("Category List is EMPTY. Test FAILED",repairsModulePage.categoryList.isEmpty());
    }








}
