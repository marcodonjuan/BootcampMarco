import Todaypage from "../pages/Todaypage";
import { URLS } from "../data/Constants";
import { STANDARD_USER } from "../data/Roles";
import { t } from "testcafe";

fixture ('Create new task ')
    .page `${URLS.LOGINURL}`
    .beforeEach(async()=>{
        await t.useRole(STANDARD_USER) 
    })
         
test ('Add one task', async t =>{
    await t
    .wait(2000)
    .click(Todaypage.plusButton)
    .typeText(Todaypage.taskInputField, 'New', { speed: 0.01 })
    .click(Todaypage.addTaskButton)
    await t.expect(Todaypage.taskList.exists).ok()
})
test ('Add one task due Tomorrow', async t =>{
    await Todaypage.TaskTomorrow()
    await t.expect(Todaypage.taskList.exists).ok()
})  
test ('Add TEN Tasks', async t =>{
    await t
    .wait(2000)
    .click(Todaypage.plusButton)
    await Todaypage.TaskMultiple()
    await t.expect(Todaypage.taskList.exists).ok()
})