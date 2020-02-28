package step_definitions;


import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.RepairsModulePage;


public class CurrentLocationSearchMore {


    RepairsModulePage repairsModulePage = new RepairsModulePage();



    @When("User select search more from dropdown list")
    public void user_select_search_more_from_dropdown_list() {
        repairsModulePage.currentLocationSearchMore.click();

    }

    @Then("User see pop up page")
    public void user_see_pop_up_page() {
        Assert.assertTrue(repairsModulePage.currentLocationSearchMoreSearchPopUp.isDisplayed());

    }

}
