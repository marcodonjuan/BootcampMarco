import Todaypage from "../pages/Todaypage";
import { URLS } from "../data/Constants";
import { STANDARD_USER } from "../data/Roles";
import { t } from "testcafe";

fixture ('Create new Project ')
    .page `${URLS.LOGINURL}`;
test ('Create a Favorite, Colored Project', async t =>{
        await t.useRole(STANDARD_USER)
            .wait(2000)
            .click(Todaypage.addProjectIcon)
            .typeText(Todaypage.projectNameField, 'Bootcamp')
            .click(Todaypage.projectColorButton)
            .wait(1500)
            .click(Todaypage.projectColorButton.withText('Berry Red'))
            .click(Todaypage.favoriteSwitch)
            .wait(2000)
            .click(Todaypage.addProjectButton, {speed:0.01})
        await t.expect(Todaypage.projectLabel.innerText).eql("Bootcamp")
})