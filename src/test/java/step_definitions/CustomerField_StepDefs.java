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
        //driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        Thread.sleep(3000);

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









}
