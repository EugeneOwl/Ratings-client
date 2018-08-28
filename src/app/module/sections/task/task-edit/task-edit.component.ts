import { Component, OnInit } from '@angular/core';
import { TaskService }       from '../../../../service/task.service';
import { Task }              from '../../../../model/Task';
import { FormControl }       from '@angular/forms';
import { Validators }        from '@angular/forms';
import { UserService }       from '../../../../service/user.service';
import { User }              from '../../../../model/User';
import { forkJoin }          from 'rxjs';
import { ActivatedRoute }    from '@angular/router';
import { Router }            from '@angular/router';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
    taskId: number;
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

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private taskService: TaskService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params['id'] !== 'new') {
                this.taskId = params['id'];
            }
        });

        forkJoin(
            this.userService.getAll(),
            this.taskService.getAll()
        ).subscribe(
            data => {
                this.users = data[0];
                this.tasks = data[1];
                this.initializeFormWithExistingSettings();
            }
        );
    }

    goBack(): void {
        this.router.navigate(['client/admin/tasks']);
    }


    save(): void {
        this.taskService.save({
            id: this.taskId ? this.taskId : 0,
            label: this.label.value,
            description: this.description.value,
            evaluation: this.evaluation.value,
            user: this.taskOwner,
            parent: this.taskParent
        }).subscribe(result => {
            this.goBack();
        }, error => console.error(error));
    }

    remove(id): void {
        this.taskService.remove(id).subscribe(result => {
            this.goBack();
        });
    }

    getLabelErrorMessage(): string {

        return this.label.hasError('required') ? 'Task label is required.' : '';
    }

    getDescriptionErrorMessage(): string {

        return this.description.hasError('required') ? 'Task description is required.' : '';
    }

    getEvaluationErrorMessage(): string {

        return this.evaluation.hasError('required') ? 'Task evaluation is required.' :
            this.evaluation.hasError('pattern') ? 'Evaluation should consist of 4 or less numeric.' :
                '';
    }

    private initializeFormWithExistingSettings(): void {
        if (! this.taskId) {

            return;
        }
        this.taskService.get(this.taskId).subscribe(success => {
                this.taskId = success.id;
                this.label.setValue(success.label);
                this.description.setValue(success.description);
                this.evaluation.setValue(success.evaluation);
                this.parent = success.parent;
                this.excludeImpossibleParents();
                this.taskOwner = this.users
                .filter(u => u.tasks
                .filter(t => t.id === this.taskId).length !== 0)[0];

                if (this.parent) {
                    this.taskParent = this.tasks
                    .filter(t => t.id === this.parent.id)[0];
                }

            }
        );
    }

    private excludeImpossibleParents() {
        this.tasks = this.tasks.filter(t => t.id !== this.taskId);

        for (const task of this.tasks) {
            let parent = task.parent;
            while (parent !== null) {
                if (parent.id === this.taskId) {
                    this.tasks = this.tasks.filter(t => t.id !== task.id);
                }
                parent = parent.parent;
            }
        }
    }


}
