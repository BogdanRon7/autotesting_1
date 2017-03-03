import PageAbstract = require("./BasicPage");
import {element, by} from "protractor";
/**
 * Created by VolodymyrParlah on 1/16/17.
 */
class MainPage extends PageAbstract{

    private SearchField = element(by.name('q'));

    private SearchButton = element(by.name('go'));

    public makeSearch(text: string){
        this.SearchField.sendKeys(text);
        this.SearchButton.click();
    }

}
export = MainPage;