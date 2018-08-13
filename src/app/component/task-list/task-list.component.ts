import { Component, OnInit }  from '@angular/core';
import { ViewChild }          from '@angular/core';
import { Input }              from '@angular/core';
import { MatDialog }          from '@angular/material';
import { MatSort }            from '@angular/material';
import { MatPaginator }       from '@angular/material';
import { UserService }        from '../../service/user.service';
import { Task }               from '../../model/Task';
import { forkJoin }           from 'rxjs';
import { TaskService }        from '../../service/task.service';
import { TaskListDatasource } from './task-list-datasource';
import { User }               from '../../model/User';


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

    @Input()
    displayedColumns: string;

    @Input()
    childDialogComponentClassName;

    constructor(
        private taskService: TaskService,
        private userService: UserService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit() {
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

    initializeEachTaskWithItsUser(users: User[]): void {
        this.tasks.map(t => t.user =
            users.filter(u => u.tasks
            .filter(u_t => u_t.id === t.id).length !== 0)[0]);
    }

    goToPersonalTaskDialog() {
        console.log('Going to personal task dialog.');
    }
}
