import { Component, OnInit } from '@angular/core';
import { UserService }       from '../../../../service/user.service';
import { User }              from '../../../../model/User';

@Component({
    selector: 'app-task-statistics',
    templateUrl: './task-statistics.component.html',
    styleUrls: ['./task-statistics.component.css']
})
export class TaskStatisticsComponent implements OnInit {
    users: User[];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getAll().subscribe(
            (success: User[]) => {
                this.users = success;
            },
            error => {
                console.log(error);
            }
        )
    }

}
