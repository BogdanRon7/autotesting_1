import PageAbstract = require("./BasicPage");
import {element, by, browser, ExpectedConditions} from "protractor";
/**
 * Created by VolodymyrParlah on 1/16/17.
 */
class ResultPage extends PageAbstract{

    private ResultArea = element(by.id('b_results'));

    private AllResultItems = this.ResultArea.all(by.className('b_algo'));

    public GetFirstItemLink(){

        browser.wait(ExpectedConditions.visibilityOf(this.ResultArea), 10000);

        return this.AllResultItems.first().all(by.tagName('a')).first().getAttribute('href').then(function (value) {
            return value.toLowerCase();
        });
    }
}
export = ResultPage;