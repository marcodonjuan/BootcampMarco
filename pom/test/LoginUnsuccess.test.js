import LoginPage from '../pages/LoginPage';
import { Selector, t } from 'testcafe';
import Todaypage from '../pages/Todaypage';


fixture `Login page`
    .page `https://todoist.com/users/showlogin`;

test('Login failed - Wrong Password', async t => {
    await t
        .typeText('#email', 'mdonjuan@gmail.com')
        .click('button[class*="submit_btn"]') 
        await t.expect(Todaypage.projectName.exists).notOk()
        
})
test('Login failed - Blank login', async t => {
    await t
        .click('button[class*="submit_btn"]') 
        await t.expect(Todaypage.projectName.exists).notOk()
        
})
test('Login failed - Wrong user', async t => {
    await t
        .typeText('#email', 'xxx')
        .typeText('#password', 'l0rdclide')
        .click('button[class*="submit_btn"]') 
        await t.expect(Todaypage.projectName.exists).notOk()
        
})