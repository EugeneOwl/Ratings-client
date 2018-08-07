import { Component, OnInit }       from '@angular/core';
import { Inject }                  from '@angular/core';
import { User }                    from '../../model/User';
import { UserService }             from '../../service/user.service';
import { MatDialogRef }            from '@angular/material';
import { MAT_DIALOG_DATA }         from '@angular/material';
import { MatDialog }               from '@angular/material';
import { FormControl }             from '@angular/forms';
import { Validators }              from '@angular/forms';
import { RatingService }           from '../../service/rating.service';
import { Rating }                  from '../../model/Rating';
import { RatingsDetailsComponent } from '../ratings-details/ratings-details.component';
import { NotificationComponent }   from '../notification/notification.component';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    user: User = {
        id: null,
        username: '',
        mobileNumber: '',
        roles: []
    };
    ratings: Rating[] = [];
    currentUser: User;
    label = new FormControl('', [Validators.required]);
    mark = new FormControl('');

    constructor(private ratingService: RatingService,
                private userService: UserService,
                private dialog: MatDialog,
                private dialogRef: MatDialogRef<UserDetailsComponent>,
                @Inject(MAT_DIALOG_DATA) public parentData) {
    }

    ngOnInit() {
        if (this.parentData.id && this.parentData.currentUserId) {
            this.userService.get(this.parentData.id).subscribe(
                success => {
                    this.user = success;
                },
                error => {
                    console.log(error.erroe.message);
                    console.log(`User with id '${this.parentData.id}'
                    not found, returning to list`);
                    this.gotoBack();
                }
            );

            this.userService.get(this.parentData.currentUserId).subscribe(
                success => {
                    this.currentUser = success;
                },
                error => {
                    console.log(error.erroe.message);
                    console.log(`User with id '${this.parentData.currentUserId}'
                    not found, returning to list`);
                    this.gotoBack();
                }
            );

            this.ratingService.getByRecipientId(this.parentData.id).subscribe(
                (success: Rating[]) => {
                    this.ratings = success;
                },
                error => {
                    console.log(error.erroe.message);
                    console.log(`Rating of user with id '${this.parentData.id}'
                    not found, returning to list`);
                    this.gotoBack();
                }
            );
        }
    }

    gotoBack() {
        this.dialogRef.close();
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
            },
            error => {
                console.log(error.error.message);
            }
        );
    }

    showRatings() {
        this.dialog.open(RatingsDetailsComponent, {
            width: '600px',
            data: {recipient: this.user}
        });
    }
}
