import { Component, OnInit }     from '@angular/core';
import { User }                  from '../../../../model/User';
import { UserService }           from '../../../../service/user.service';
import { FormControl }           from '@angular/forms';
import { Validators }            from '@angular/forms';
import { RatingService }         from '../../../../service/rating.service';
import { Rating }                from '../../../../model/Rating';
import { ActivatedRoute }        from '@angular/router';
import { Router }                from '@angular/router';
import { NotificationComponent } from '../../../component/notification/notification.component';
import { MatDialog }             from '@angular/material';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    userId: number;
    currentUserId: number;
    user: User = {
        id: null,
        username: '',
        mobileNumber: '',
        roles: [],
        tasks: []
    };
    ratings: Rating[] = [];
    currentUser: User;
    label = new FormControl('', [Validators.required]);
    mark = new FormControl('');

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private ratingService: RatingService,
                private userService: UserService,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.userId = params['id'];
        });
        this.currentUserId = JSON.parse(localStorage.getItem('user')).id;

        if (this.userId && this.currentUserId) {
            this.userService.get(this.userId).subscribe(
                success => {
                    this.user = success;
                }
            );

            this.userService.get(this.currentUserId).subscribe(
                success => {
                    this.currentUser = success;
                }
            );

            this.ratingService.getByRecipientId(this.userId).subscribe(
                (success: Rating[]) => {
                    this.ratings = success;
                }
            );
        }
    }

    goBack() {
        this.router.navigate(['client/user/users']);
    }

    save(label: string, mark: number) {
        const rating: Rating = {
            id: 0,
            label: label,
            mark: mark,
            sender: this.currentUser,
            recipient: this.user
        };
        this.ratingService.save(rating).subscribe(
            success => {
                this.ratings.length++;
                this.label.setValue('');
                this.mark.setValue('');

                this.dialog.open(NotificationComponent, {
                    width: '400px',
                    data: {
                        message: `Rating '${label}' with mark '${mark}'
                        from ${this.currentUser.username}
                        to ${this.user.username} established.`
                    }
                });
            }
        );
    }
}