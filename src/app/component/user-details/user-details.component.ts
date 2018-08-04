import { Component, OnInit } from '@angular/core';
import { OnDestroy }         from '@angular/core';
import { User }              from '../../model/User';
import { Subscription }      from 'rxjs';
import { Router }            from '@angular/router';
import { ActivatedRoute }    from '@angular/router';
import { UserService }       from '../../service/user.service';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
    user: User;
    sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.userService.get(id).subscribe((user: User) => {
                    if (user) {
                        this.user = user;
                    } else {
                        console.log(`User with id '${id}' not found, returning to list`);
                        this.gotoBack();
                    }
                });
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    gotoBack() {
        this.router.navigate(['client/user']);
    }
}
