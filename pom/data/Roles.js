import { Role } from "testcafe";
import { URLS, CREDENTIALS } from "./Constants";
import LoginPage from "../pages/LoginPage";


export const STANDARD_USER = Role(URLS.LOGINURL, async t => {
    await LoginPage.submitLogin(CREDENTIALS.USER.EMAIL, CREDENTIALS.USER.PASSWORD)

}, {preserveUrl: true})