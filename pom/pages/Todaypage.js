import { Selector, t } from 'testcafe';
class TodayPage {
    constructor(){
        this.projectName=Selector('.simple_content').withExactText('Today');
        this.plusButton=Selector('.plus_add_button');
        this.addTaskButton=Selector('button[class*=reactist_button--primary');
        this.cancelButton  = Selector('.cancel')
        this.taskInputField = Selector('.public-DraftStyleDefault-ltr')
        this.taskList = Selector ('.task_list_item__content');
        this.taskDueSelector= Selector ('span[class="date date_today"]');
        this.taskDueTomorrowSelector= Selector('[class="scheduler-suggestions-item-label"]')
        this.menuButton= Selector ('button[class="left_menu_toggle top_bar_btn"]')
        this.inboxButton = Selector('[class="item_content"]')
        this.cancelBtn  = Selector('.cancel')
        this.getTaskName = Selector('.markdown_content')
        this.addProjectIcon = Selector('button[class="adder_icon"]')
        this.projectNameField = Selector('[class="form_field_control"]')
        this.projectColorButton = Selector('[class="color_dropdown_select__name"]')
        this.favoriteSwitch = Selector('[class="reactist_switch--handle"]')
        this.addProjectButton = Selector ('[class="ist_button ist_button_red"]')
        this.projectLabel = Selector ('[class="editable"]')
        this.moreActions = Selector ('[class="more_actions_button"]')
        this.deleteTaskButton =Selector ('[class="icon_menu_item__content"]').withExactText('Delete task')
        this.deleteConfirmation = Selector ('[class="ist_button ist_button_red"]')
    }
}
export default new TodayPage