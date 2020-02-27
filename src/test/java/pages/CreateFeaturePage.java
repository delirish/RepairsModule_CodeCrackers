package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class CreateFeaturePage {
    public CreateFeaturePage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }@FindBy(xpath = "//button[@class=\"btn btn-primary btn-sm o_list_button_add\"]")
    public WebElement createFeatureButton;
    @FindBy(xpath = "//button[@class=\"btn btn-primary btn-sm o_list_button_add\"]")
    public WebElement createFeatureButton1;
}
