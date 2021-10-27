import Todaypage from "../pages/Todaypage";
import { URLS } from "../data/Constants";
import { STANDARD_USER } from "../data/Roles";
import { t } from "testcafe";

fixture ('Delete  Tasks ')
    .page `${URLS.LOGINURL}`
    .beforeEach(async()=>{
        await t.useRole(STANDARD_USER) 
    })
test('Delete tasks', async t =>{
    await t
    .wait(2000)
    .click(Todaypage.inboxButton)
    .wait(1000)
        var count=0
        while (count <10){
        await t
        .hover(Todaypage.taskList)
        .click(Todaypage.moreActions, {speed:0.01})
        .click(Todaypage.deleteTaskButton, {speed:0.01})
        .click(Todaypage.deleteConfirmation, {speed:0.01})
        count++;
    
    }
    await t.expect(Todaypage.taskList.exists).notOk() 
})
test.meta('type', 'smoke') ('Delete one task', async t =>{
    await t
    .wait(2000)
    .click(Todaypage.inboxButton)
    .wait(1000)
        await t
        .hover(Todaypage.taskList)
        .click(Todaypage.moreActions, {speed:0.01})
        .click(Todaypage.deleteTaskButton, {speed:0.01})
        .click(Todaypage.deleteConfirmation, {speed:0.01})
        await t.expect(Todaypage.taskList.exists).notOk() 
    })
