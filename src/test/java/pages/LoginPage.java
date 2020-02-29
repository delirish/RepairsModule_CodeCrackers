package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class LoginPage {
    public LoginPage(){

        PageFactory.initElements(Driver.getDriver(),this);
    }


//---------------------------------------------------------------------------------------------------------------
    //IRYNA

    @FindBy(id = "login")
    public WebElement emailInput;

    @FindBy(id = "password")
    public WebElement passwordInput;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement logInButton;




//---------------------------------------------------------------------------------------------------------------
    //ELIF
    @FindBy(xpath = "//input[@id=\"login\"]")
    public WebElement eMailAdd;
    @FindBy(xpath = "//input[@id=\"password\"]")
    public WebElement passWord;
    @FindBy (xpath = "//button[@type=\"submit\"]")
    public WebElement submitButton;





//-------------------------------------------------------------------------------------------------

//Aiperi

    @FindBy(xpath = "/html/body/div/main/div/form/div[1]/input")
    public WebElement login;

    @FindBy(xpath = "/html/body/div/main/div/form/div[2]/input")
    public WebElement password;

    @FindBy(xpath = "/html/body/div/main/div/form/div[3]/button")
    public WebElement clickButton;

}
