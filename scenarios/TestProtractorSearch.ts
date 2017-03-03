///<reference path="../node_modules/@types/jasmine/index.d.ts"/>
import MainPage = require("../page_objects/MainPage");
import ResultPage = require("../page_objects/ResultPage");
import {browser} from "protractor";
/**
 * Created by VolodymyrParlah on 1/16/17.
 */
describe("First result contains protractor in the link", function () {

    let mainPage = new MainPage();
    let resultPage  = new ResultPage();

    it("Main page is opened", function () {
        browser.get('/');
        expect(mainPage.getPageTitle()).toContain("Bing", "Wrong title")
    });
    it("First result contains protractor in the link", function () {
        mainPage.makeSearch("protractor");
        expect(resultPage.GetFirstItemLink()).toContain("protractor", "Url does not contain protractor")
    });
});
