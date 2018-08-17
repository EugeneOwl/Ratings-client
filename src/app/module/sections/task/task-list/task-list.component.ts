import { Component, OnInit }  from '@angular/core';
import { ViewChild }          from '@angular/core';
import { Input }              from '@angular/core';
import { MatSort }            from '@angular/material';
import { MatPaginator }       from '@angular/material';
import { forkJoin }           from 'rxjs';
import { TaskListDatasource } from './task-list-datasource';
import { TaskService }        from '../../../../service/task.service';
import { UserService }        from '../../../../service/user.service';
import { User }               from '../../../../model/User';
import { Task }               from '../../../../model/Task';
import { ActivatedRoute }     from '@angular/router';
import { Router }             from '@angular/router';


@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: TaskListDatasource;
    tasks: Task[];
    allottedTaskId: number;

    @Input()
    displayedColumns: string[];

    @Input()
    customDatasource;

    @Input()
    adminMode: boolean;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private taskService: TaskService,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            if (data.displayedColumns) {
                this.displayedColumns = data.displayedColumns;
                this.customDatasource = data.customDatasource;
                this.adminMode = data.adminMode;
            }
        });


        if (this.customDatasource !== false) {
            this.tasks = this.customDatasource;
            this.dataSource = new TaskListDatasource(
                this.paginator,
                this.sort,
                this.customDatasource
            );

            return;
        }

        forkJoin(this.taskService.getAll(), this.userService.getAll())
        .subscribe(data => {
            this.tasks = data[0];
            this.initializeEachTaskWithItsUser(data[1]);
            this.dataSource = new TaskListDatasource(
                this.paginator,
                this.sort,
                this.tasks
            );
        });
    }

    goToPersonalTaskDialog(taskId: number) {
        if (this.adminMode) {
            this.router.navigate([`${this.router.url}/${taskId}`]);
        }
    }

    allotTask(taskId: number): void {
        this.allottedTaskId = taskId;
    }

    allottedIfNeeded(taskId: number): string {
        return (taskId === this.allottedTaskId ? 'allotted' : '');
    }

    private initializeEachTaskWithItsUser(users: User[]): void {
        this.tasks.map(t => t.user =
            users.filter(u => u.tasks
            .filter(u_t => u_t.id === t.id).length !== 0)[0]);
    }
}
