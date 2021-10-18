import Todaypage from "../pages/Todaypage";
import { URLS } from "../data/Constants";
import { STANDARD_USER } from "../data/Roles";
import { t } from "testcafe";

fixture ('Create new task ')
    .page `${URLS.LOGINURL}`;
    /*.beforeEach(async()=>{
        await t.useRole(STANDARD_USER) ESTO NO FUNCIONA
    })*/
         
test ('Add one task', async t =>{
    await t.useRole(STANDARD_USER)
    .wait(2000)
    .click(Todaypage.plusButton)
    .typeText(Todaypage.taskInputField, 'New', { speed: 0.01 })
    .click(Todaypage.addTaskButton)
    await t.expect(Todaypage.taskList.exists).ok()
})
test ('Add one task due Tomorrow', async t =>{
    await t.useRole(STANDARD_USER)
    .wait(2000)
    .click(Todaypage.plusButton)
    .typeText(Todaypage.taskInputField, 'New', { speed: 0.01 })
    .click(Todaypage.taskDueSelector)
    .wait(3000)
    .click(Todaypage.taskDueTomorrowSelector.withText('Tomorrow'))
    .wait(2000)
    .click(Todaypage.addTaskButton)
    .click(Todaypage.inboxButton)
    .wait(1000)
    await t.expect(Todaypage.taskList.exists).ok()
})  
test ('Add TEN Tasks', async t =>{
    await t.useRole(STANDARD_USER)
    .wait(2000)
    .click(Todaypage.plusButton)
    var count = 0;
    while (count <10){
        await t
        .typeText(Todaypage.taskInputField, 'New '+count, { speed: 0.01 })
        .click(Todaypage.addTaskButton)
        count++; 
    }
    await t.expect(Todaypage.taskList.exists).ok()
})