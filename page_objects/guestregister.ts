import PageAbstract = require("./BasicPage");
import {element, by} from "protractor";
/**
 * Created by VolodymyrParlah on 1/16/17.
 */
class GuestRegister extends PageAbstract{
    private sing_up_button = element(by.className('sign_up_link button tiny radius'));
    private Agentlabel = element(by.xpath('.//*[@id=\'auth-page\']/form/label[2]/p'));
    private firstname = element(by.name('firstName'));
    private lastname = element(by.name('lastName'));
    private zipcode = element(by.name('zipcode'));
    private email = element(by.name('email'));
    private password = element(by.name('password'));
    private accessCode = element(by.name('accessCode'));
    private checkterm = element(by.id("accept_terms"));
    private submitbutton = element(by.className('button submit'));
    private settingbutton = element(by.id("settings_image"));
    private deleteaccount = element(by.id("delete_account_button"));



    public Register(){
        this.sing_up_button.click();
        this.Agentlabel.click();
        this.firstname.sendKeys("testfirstname");
        this.lastname.sendKeys("testlastname");
        this.zipcode.sendKeys("12345");
        //add correct email
        this.email.sendKeys("sadasd@");
        this.password.sendKeys("1q2w3e4r");
        this.accessCode.sendKeys("FF");
        this.checkterm.click();
        this.submitbutton.click();
    }
    public Deleteaccount(){
        this.settingbutton.click();
        this.deleteaccount.click();
        this.deleteaccount.sendKeys(protractor.Key.ENTER);

    }

}
export = GuestRegister;