import MainPage = require("../page_objects/MainPage");
import ResultPage = require("../page_objects/ResultPage");
import {browser} from "protractor";
/**
 * Created by VolodymyrParlah on 1/16/17.
 */
describe("First result contains protractor in the link", async function () {

    let mainPage = new MainPage();
    let resultPage  = new ResultPage();

    it("Main page is opened", async function () {
        browser.get('/');

        let variable = await mainPage.getPageTitle();

        console.log("async promise-------------- :"+ variable);

        expect(mainPage.getPageTitle()).toContain("Bing", "Wrong title")
    });
    it("First result contains protractor in the link", function () {
        mainPage.makeSearch("protractor");
        expect(resultPage.GetFirstItemLink()).toContain("protractor", "Url does not contain protractor")
    });
});
