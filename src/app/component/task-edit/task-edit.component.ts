import { Component, OnInit }      from '@angular/core';
import { Inject }                 from '@angular/core';
import { MAT_DIALOG_DATA }        from '@angular/material';
import { MatDialogRef }           from '@angular/material';
import { RoleEditComponent }      from '../role-edit/role-edit.component';
import { PersonalRoleDialogData } from '../role-list/role-list.component';
import { TaskService }            from '../../service/task.service';
import { Task }                   from '../../model/Task';
import { FormControl }            from '@angular/forms';
import { Validators }             from '@angular/forms';
import { UserService }            from '../../service/user.service';
import { User }                   from '../../model/User';
import { forkJoin }               from 'rxjs';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
    id: number = 0;
    label = new FormControl('', [Validators.required]);
    description = new FormControl('', [Validators.required]);
    evaluation = new FormControl('',
        [Validators.pattern('^\\d{1,4}$'),
            Validators.required]);
    parent: Task = {
        id: 0,
        label: '',
        description: '',
        evaluation: 0,
        user: null,
        parent: null
    };
    users: User[];
    taskOwner: User;

    constructor(private userService: UserService,
                private taskService: TaskService,
                public dialogRef: MatDialogRef<RoleEditComponent>,
                @Inject(MAT_DIALOG_DATA) public data: PersonalRoleDialogData) {
    }

    ngOnInit() {
        if (this.data.id) {
            forkJoin(
                this.taskService.get(this.data.id),
                this.userService.getAll()
            ).subscribe(data => {
                    this.id = data[0].id;
                    this.label.setValue(data[0].label);
                    this.description.setValue(data[0].description);
                    this.evaluation.setValue(data[0].evaluation);
                    this.parent = data[0].parent;

                    this.users = data[1];
                    this.taskOwner = this.users
                    .filter(u => u.tasks
                    .filter(t => t.id === this.id).length !== 0)[0];
                },
                error => {
                    console.log(error.error.message);
                });
        } else {
            this.userService.getAll().subscribe(
                (success: User[]) => {
                    this.users = success;
                },
                error => {
                    console.log(error.error.message);
                }
            )
        }
    }

    goBack(): void {
        this.dialogRef.close();
    }


    save(): void {
        this.taskService.save({
            id: this.id ? this.id : 0,
            label: this.label.value,
            description: this.description.value,
            evaluation: this.evaluation.value,
            user: this.taskOwner,
            parent: null
        }).subscribe(result => {
            this.goBack();
        }, error => console.error(error.error.message));
    }

    remove(id): void {
        this.taskService.remove(id).subscribe(result => {
            this.id = 0;
            this.goBack();
        }, error => console.error(error));
    }
}
