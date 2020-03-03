package step_definitions;

import com.github.javafaker.Faker;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.RepairsModulePage;

public class ProductToRepair_StepDefs {

    RepairsModulePage repairsModulePage = new RepairsModulePage();
    Faker faker = new Faker();


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
