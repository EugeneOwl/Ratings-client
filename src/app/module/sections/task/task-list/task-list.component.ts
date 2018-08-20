import { Component, OnInit } from '@angular/core';
import { Input }             from '@angular/core';
import { TaskService }       from '../../../../service/task.service';
import { Task }              from '../../../../model/Task';
import { ActivatedRoute }    from '@angular/router';
import { Router }            from '@angular/router';
import { FormControl }       from '@angular/forms';
import { forkJoin }          from 'rxjs';
import { UserService }       from '../../../../service/user.service';
import { User }              from '../../../../model/User';


@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    private tasksOnPage: Task[] = [];
    private pageNumber: number = 0;
    private pageNumbers: number[] = [];
    private sortByColumn: string = 'id';
    filterPattern = new FormControl('');
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
            this.displayedColumns = data.displayedColumns;
            this.customDatasource = data.customDatasource;
            this.adminMode = data.adminMode;
        });
        if (this.customDatasource !== false) {
            this.tasksOnPage = this.customDatasource;

            return;
        }
        this.getTasksOnPage();
    }

    setPage(number: number): void {
        this.pageNumber = number;
        this.getTasksOnPage();
    }

    setSortColumn(sortColumn: string): void {
        this.sortByColumn = sortColumn;
        this.getTasksOnPage();
    }

    isActiveColor(sortColumn: string): string {
        return sortColumn === this.sortByColumn ? 'primary' : '';
    }

    executeSearch() {
        this.pageNumber = 0;
        this.getTasksOnPage();
    }

    deleteTask(taskId: number): void {
        this.taskService.remove(taskId).subscribe(
            success => {
                this.getTasksOnPage();
            },
            error => {
                console.log(error);
            }
        );
    }

    private getTasksOnPage() {
        forkJoin(
            this.taskService.getPage(
                this.pageNumber,
                this.sortByColumn,
                this.filterPattern.value
            ),
            this.userService.getAll()
        )
        .subscribe(success => {
                this.tasksOnPage = success[0]['content'];
                this.pageNumbers = new Array(success[0]['totalPages']);
                this.initializeEachTaskWithItsUser(success[1]);
            },
            error => {
                console.log(error);
            }
        );
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
        this.tasksOnPage.map(t => t.user =
            users.filter(u => u.tasks
            .filter(u_t => u_t.id === t.id).length !== 0)[0]);
    }
}
