import { Selector, t } from 'testcafe';
class LoginPage{
    constructor(){
       this.emailInput = Selector('#email')
       this.passwordInput = Selector ('#password')
       this.loginButton = Selector ('button[class*="submit_btn"]')
    }

    async submitLogin(username, password){
        await t
        .typeText(this.emailInput, username)
        .typeText(this.passwordInput, password)
        .click(this.loginButton) 
        .wait(2000)
    }
}
export default new LoginPage


