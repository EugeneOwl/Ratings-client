import { Component, OnInit } from '@angular/core';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
    childDialogComponentClassName = UserEditComponent;
    chosenListName = 'role-list';

    constructor() {
    }

    ngOnInit() {
    }

    onChooseList(chosenListName) {
        this.chosenListName = chosenListName;
    }
}
