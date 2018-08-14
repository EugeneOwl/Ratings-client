import { Component, OnInit }       from '@angular/core';
import { Inject }                  from '@angular/core';
import { MAT_DIALOG_DATA }         from '@angular/material';
import { MatDialogRef }            from '@angular/material';
import { UserDetailsComponent }    from '../user-details/user-details.component';
import { PersonalTasksDialogData } from '../user-details/user-details.component';
import { Task }                    from '../../model/Task';
import { User }                    from '../../model/User';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
    tasks: Task[] = [];
    user: User = {
        id: 0,
        username: '',
        mobileNumber: '',
        roles: [],
        tasks: []
    };

    constructor(public dialogRef: MatDialogRef<UserDetailsComponent>,
                @Inject(MAT_DIALOG_DATA) public data: PersonalTasksDialogData) {
    }

    ngOnInit() {
        this.user = this.data.user;
        this.tasks = this.data.tasks;
    }

    goBack() {
        this.dialogRef.close();
    }
}
