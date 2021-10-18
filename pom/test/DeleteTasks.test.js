import Todaypage from "../pages/Todaypage";
import { URLS } from "../data/Constants";
import { STANDARD_USER } from "../data/Roles";
import { t } from "testcafe";

fixture ('CDelete all Tasks ')
    .page `${URLS.LOGINURL}`;

test.only ('Delete tasks', async t =>{
    await t.useRole(STANDARD_USER)
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