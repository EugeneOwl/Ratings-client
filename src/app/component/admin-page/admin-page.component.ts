import { Component, OnInit } from '@angular/core';
import { UserEditComponent } from '../../module/sections/user/user-edit/user-edit.component';
import { TaskEditComponent } from '../../module/sections/task/task-edit/task-edit.component';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
    childDialogComponentClassNameForUserList = UserEditComponent;
    childDialogComponentClassNameForTaskList = TaskEditComponent;
    chosenListName = 'role-list';

    constructor() {
    }

    ngOnInit() {
    }

    onChooseList(chosenListName) {
        this.chosenListName = chosenListName;
    }
}
