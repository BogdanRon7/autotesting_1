import {browser} from "protractor";
/**
 * Created by VolodymyrParlah on 1/16/17.
 */
class BasicPage{

    public getPageTitle(){
        return browser.getTitle();
    }
}
export = BasicPage;