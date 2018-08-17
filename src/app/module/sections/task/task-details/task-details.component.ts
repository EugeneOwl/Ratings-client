import { Component, OnInit } from '@angular/core';
import { User }              from '../../../../model/User';
import { ActivatedRoute }    from '@angular/router';
import { Router }            from '@angular/router';
import { UserService }       from '../../../../service/user.service';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
    userId: number;
    user: User = {
        id: 0,
        username: '',
        mobileNumber: '',
        roles: [],
        tasks: []
    };

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private userService: UserService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.userId = params['id'];
        });

        this.userService.get(this.userId).subscribe(
            (success: User) => {
                this.user = success; //TODO у Eugene каждой таски по 8 штук. Какого
            },
            error => {
                console.log(error);
            }
        );
    }

    goBack() {
        this.router.navigate([`client/user/users/${this.userId}`]);
    }
}
