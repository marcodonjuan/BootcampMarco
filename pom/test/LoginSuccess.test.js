import { Selector, t } from "testcafe";
import LoginPage from "../pages/LoginPage";
import { CREDENTIALS, URLS } from "../data/Constants";
import Todaypage from "../pages/Todaypage";
import {STANDARD_USER} from "../data/Roles"

fixture ('Login to ToDoist')
    .page `${URLS.LOGINURL}`;

test.meta('type', 'smoke') ('Login Successfully', async t => {
    await t.useRole(STANDARD_USER)
    .wait(2000)
    await t.expect(Todaypage.projectName.exists).ok()
})
