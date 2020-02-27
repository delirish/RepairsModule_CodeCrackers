package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class CustomerFieldPage {
    public CustomerFieldPage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }@FindBy(xpath = "(//input[@class=\"o_input ui-autocomplete-input\"])[4]")
    public WebElement customerField1;

    @FindBy(xpath = "(//ul[@class=\"ui-autocomplete ui-front ui-menu ui-widget ui-widget-content\"])[4]")
    public List<WebElement> customerList;

    @FindBy(linkText = "Search More...")
    public WebElement searchMore;

    @FindBy(xpath = "//h4[@class=\"modal-title\"]")
    public WebElement searchCustomerHeader;

    @FindBy(linkText = "Create and Edit...")
    public WebElement createAndEdit;

    @FindBy(xpath = "(//input[@class=\"o_field_char o_field_widget o_input o_required_modifier\"])[2]")
    public WebElement nameBox;

    @FindBy(xpath = "//button[@class=\"btn btn-sm btn-primary\"]/span")
    public WebElement saveButton;
}
