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
    tasks: Task[];
    taskParent: Task;

    constructor(private userService: UserService,
                private taskService: TaskService,
                public dialogRef: MatDialogRef<RoleEditComponent>,
                @Inject(MAT_DIALOG_DATA) public data: PersonalRoleDialogData) {
    }

    ngOnInit() {
        forkJoin(
            this.userService.getAll(),
            this.taskService.getAll()
        ).subscribe(data => {
                this.users = data[0];
                this.tasks = data[1];
                this.initializeFormWithExistingSettings();
            }, error => {
                console.log(error.error.message);
            }
        );
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
            parent: this.taskParent
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

    private initializeFormWithExistingSettings(): void {
        if (! this.data.id) {

            return;
        }
        this.taskService.get(this.data.id).subscribe(success => {
                this.id = success.id;
                this.label.setValue(success.label);
                this.description.setValue(success.description);
                this.evaluation.setValue(success.evaluation);
                this.parent = success.parent;

                this.taskOwner = this.users
                .filter(u => u.tasks
                .filter(t => t.id === this.id).length !== 0)[0];

                if (this.parent) {
                    this.taskParent = this.tasks
                    .filter(t => t.id === this.parent.id)[0];
                }
            },
            error => {
                console.log(error.error.message);
            }
        );
    }
}
