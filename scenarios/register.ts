import {browser} from "protractor";
import GuestRegister = require("../page_objects/guestregister");
/**
 * Created by VolodymyrParlah on 1/16/17.
 */
describe("register positive test-case", function () {

    let guestRegister = new GuestRegister();

    it("register page", function () {
        browser.get('/');
        guestRegister.Register();
    });
});


