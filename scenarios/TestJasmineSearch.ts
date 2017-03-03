import MainPage = require("../page_objects/MainPage");
import ResultPage = require("../page_objects/ResultPage");
import {browser} from "protractor";
/**
 * Created by VolodymyrParlah on 1/16/17.
 */
describe("First result contains jasmine in the link", function () {

    var  mainPage = new MainPage();
    let resultPage  = new ResultPage();

    it("Main page is opened", function () {
        browser.get('/');
        expect(mainPage.getPageTitle()).toContain("Bing", "Wrong title")
    });
    it("First result contains jasmine in the link", function () {
        mainPage.makeSearch("jasmine");
        expect(resultPage.GetFirstItemLink()).toContain("jasmine", "Url does not contain jasmine")
    });
});


