package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class RepairsModulePage {
     public RepairsModulePage(){
         PageFactory.initElements(Driver.getDriver(), this);
     }

 //---------------------------------------------------------------------------------------------------------------
    //IRYNA

    @FindBy(xpath = "//span[@title='Advanced Search...']")
    public WebElement advancedSearchButton;

    @FindBy(xpath = "//span[@class='o_searchview_more fa fa-search-plus']")
    public WebElement advancedSearchButtonPlus;

    @FindBy(xpath = "//span[@class='o_searchview_more fa fa-search-minus']")
    public WebElement advancedSearchButtonMinus;

    @FindBy(xpath = "(//button[@data-toggle='dropdown'])[3]")
    public WebElement filtersButton;

    @FindBy(xpath = "//ul[@class='dropdown-menu o_filters_menu']")
    public WebElement filtersDropdownMenu;

    @FindBy(xpath = "//div//table//tbody//tr//td[@class='o_data_cell o_readonly_modifier']")
    public List<WebElement> listOfOrders;

    @FindBy(xpath = "//div//table//tbody//tr//td[.='Confirmed']")
    public List<WebElement> confirmedListOfOrders;

    @FindBy(xpath = "//div//table//tbody//tr//td[.='Ready to Repair']")
    public List<WebElement> readyToRepairListOfOrders;

    @FindBy(xpath = "//div//table//tbody//tr//td[.='Quotation']")
    public List<WebElement> quotationsListOfOrders;

    @FindBy(xpath = "//a[.='Quotations']")
    public WebElement quotationsFilter;

    @FindBy(xpath = "//span[contains(text(),'Quotations')]")
    public WebElement quotationsFilterInSearchBox;

    @FindBy(xpath = "(//li[@data-index='0'])[1]")
    public WebElement quotationsFilterSelectionCheckMark;

    @FindBy(xpath = "//a[.='Confirmed']")
    public WebElement confirmedFilter;

    @FindBy(xpath = "//span[contains(text(),'Confirmed')]")
    public WebElement confirmedFilterInSearchBox;

    @FindBy(xpath = "(//li[@data-index='1'])[1]")
    public WebElement confirmedFilterSelectionCheckMark;

    @FindBy(xpath = "//a[.='Ready To Repair']")
    public WebElement readyToRepairFilter;

    @FindBy(xpath = "//span[contains(text(),'Ready To Repair')]")
    public WebElement readyToRepairFilterInSearchBox;

    @FindBy(xpath = "(//li[@data-index='2'])[1]")
    public WebElement readyToRepairFilterSelectionCheckMark;

    @FindBy(xpath = "//a[.='Invoiced']")
    public WebElement invoicedFilter;

    @FindBy(xpath = "//span[contains(text(),'Invoiced')]")
    public WebElement invoicedFilterInSearchBox;

    @FindBy(xpath = "(//li[@data-index='0'])[2]")
    public WebElement invoicedFilterSelectionCheckMark;




//--------------------------------------------------------------------------------------------
    //ANVAR

    @FindBy(linkText = "Repairs")
    public WebElement repairsModule;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-sm o_list_button_add']")
    public WebElement RepairOrderCreateButton;

    @FindBy(xpath = "(//input[@class='o_input ui-autocomplete-input'])[6]")
    public WebElement currentLocationBox;

    @FindBy(xpath = "//a[contains(text(),'Create and Edit...')]")
    public WebElement currentLocationCreateAndEdit;

    @FindBy(xpath = "//a[contains(text(),'Search More...')]")
    public WebElement currentLocationSearchMore;





//--------------------------------------------------------------------------------------------------
    //AIPERI

    @FindBy(xpath = "/html/body/div[1]/div[2]/div[2]/div/div/div/table/thead/tr/th[1]")
    public WebElement selectAllCheckboxes;

    @FindBy(xpath = "/html/body/div[1]/div[2]/div[2]/div/div/div/table/thead/tr/th[1]/div")
    public WebElement deselectAllCheckboxes;

    @FindBy(xpath="/html/body/div[1]/div[2]/div[2]/div/div/div/table/thead/tr/th[2]")
    public WebElement sortRepairReference;

    @FindBy(xpath="/html/body/div[1]/div[2]/div[2]/div/div/div/table/thead/tr/th[3]")
    public WebElement sortProductToReference;

    @FindBy(xpath="/html/body/div[1]/div[2]/div[2]/div/div/div/table/thead/tr/th[4]")
    public WebElement sortCustomers;

    @FindBy(xpath="/html/body/div[1]/div[2]/div[2]/div/div/div/table/thead/tr/th[5]")
    public WebElement sortDeliveryAddress;

    @FindBy(xpath="/html/body/div[1]/div[2]/div[2]/div/div/div/table/thead/tr/th[6]")
    public WebElement sortWarrantyExpiration;

    @FindBy(xpath="/html/body/div[1]/div[2]/div[2]/div/div/div/table/thead/tr/th[7]")
    public WebElement sortStatus;




//--------------------------------------------------------------------------------------------------------
    //EDUARD

//    @FindBy(xpath = "//button[@class='btn btn-primary btn-sm o_list_button_add']")
//    public WebElement createButton;                            -***ELEMENT WITH THIS NAME ALREADY EXISTS ON THIS PAGE, PLEASE RENAME OR USE EXISTING***
    @FindBy(xpath = "//input[@id='o_field_input_104']")
    public WebElement productRepairButton;

    @FindBy(xpath = "//ul[@id='ui-id-3']")
    public List<WebElement> productsToRepair;

    @FindBy(xpath = "//a[.='Search More...']")
    public WebElement searchMoreButton;

    @FindBy(xpath = "//button[@class='btn btn-sm btn-primary']")
    WebElement createButton2;

    @FindBy(xpath = "//input[@placeholder='Product Name']")
    WebElement greyText;

    @FindBy(id = "o_field_input_496")
    WebElement inputProductName;

    @FindBy(id = "o_field_input_503")
    WebElement productTypeButton;

    @FindBy(id = "o_field_input_504")
    WebElement internalReferenceTextBox;

    @FindBy(id = "o_field_input_505")
    WebElement bareCodeBoxText;

    @FindBy(id = "o_field_input_506")
    List<WebElement> categoryList;

    @FindBy(xpath = "//input[@id='o_field_input_507']")
    public WebElement salePriceBox;

    @FindBy(id = "o_field_input_511")
    public WebElement costBox;



//---------------------------------------------------------------------------------------------------------------
    //ELIF
 @FindBy(xpath = "//*[@data-menu=\"535\"]/span")
    public WebElement repairButton;

 @FindBy(xpath = "//button[@class=\"btn btn-primary btn-sm o_list_button_add\"]")
   public WebElement createFeatureButton;




//---------------------------------------------------------------------------------------------------------------
    //NURKYZ

//    @FindBy(xpath = "/html/body/div[1]/div[2]/div[1]/div[2]/div[1]/div/button[1]")
//    public WebElement createButton;                                            -***ELEMENT WITH THIS NAME ALREADY EXISTS ON THIS PAGE, PLEASE RENAME OR USE EXISTING***
}
