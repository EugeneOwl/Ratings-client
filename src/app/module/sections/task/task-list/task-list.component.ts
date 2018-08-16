import { Component, OnInit }  from '@angular/core';
import { ViewChild }          from '@angular/core';
import { Input }              from '@angular/core';
import { MatDialog }          from '@angular/material';
import { MatSort }            from '@angular/material';
import { MatPaginator }       from '@angular/material';
import { forkJoin }           from 'rxjs';
import { TaskListDatasource } from './task-list-datasource';
import { TaskService }        from '../../../../service/task.service';
import { UserService }        from '../../../../service/user.service';
import { User }               from '../../../../model/User';
import { Task }               from '../../../../model/Task';


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
    allotedTaskId: number;

    @Input()
    displayedColumns: string;

    @Input()
    childDialogComponentClassName;

    @Input()
    customDatasource;

    @Input()
    adminMode: boolean;

    constructor(
        private taskService: TaskService,
        private userService: UserService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit() {
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

    goToPersonalTaskDialog(id: number): void {
        if (! this.childDialogComponentClassName) {

            return;
        }
        const dialogRef = this.dialog.open(this.childDialogComponentClassName, {
            width: '500px',
            data: {id: id}
        });
        dialogRef.afterClosed().subscribe(res => {
            this.ngOnInit();
        })
    }

    allotTask(taskId: number): void {
        this.allotedTaskId = taskId;
    }

    allotedIfNeeded(taskId: number): string {
        return (taskId === this.allotedTaskId ? 'allotted' : '');
    }

    private initializeEachTaskWithItsUser(users: User[]): void {
        this.tasks.map(t => t.user =
            users.filter(u => u.tasks
            .filter(u_t => u_t.id === t.id).length !== 0)[0]);
    }
}
