import Todaypage from "../pages/Todaypage";
import { URLS } from "../data/Constants";
import { STANDARD_USER } from "../data/Roles";
import { t } from "testcafe";

fixture ('Create new Project ')
    .page `${URLS.LOGINURL}`
    .beforeEach(async()=>{
        await t.useRole(STANDARD_USER) 
    })    
test.meta('type', 'smoke') ('Create a Favorite, Colored Project', async t =>{
        await Todaypage.NewProjectFavorite()
        await t.expect(Todaypage.projectLabel.innerText).eql("Bootcamp")
})