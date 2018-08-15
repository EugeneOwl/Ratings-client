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
import { PersonalUserDialogData }  from '../user-list/user-list.component';
import { TaskDetailsComponent }    from '../task-details/task-details.component';
import { Task }                    from '../../model/Task';

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
        roles: [],
        tasks: []
    };
    ratings: Rating[] = [];
    currentUser: User;
    label = new FormControl('', [Validators.required]);
    mark = new FormControl('');

    constructor(private ratingService: RatingService,
                private userService: UserService,
                private dialog: MatDialog,
                private dialogRef: MatDialogRef<UserDetailsComponent>,
                @Inject(MAT_DIALOG_DATA) public data: PersonalUserDialogData) {
    }

    ngOnInit() {
        if (this.data.id && this.data.currentUserId) {
            this.userService.get(this.data.id).subscribe(
                success => {
                    this.user = success;
                },
                error => {
                    console.log(error.erroe.message);
                    console.log(`User with id '${this.data.id}'
                    not found, returning to list`);
                    this.gotoBack();
                }
            );

            this.userService.get(this.data.currentUserId).subscribe(
                success => {
                    this.currentUser = success;
                },
                error => {
                    console.log(error);
                    console.log(`User with id '${this.data.currentUserId}'
                    not found, returning to list`);
                    this.gotoBack();
                }
            );

            this.ratingService.getByRecipientId(this.data.id).subscribe(
                (success: Rating[]) => {
                    this.ratings = success;
                },
                error => {
                    console.log(error);
                    console.log(`Rating of user with id '${this.data.id}'
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
                console.log(error);
            }
        );
    }

    showRatings() {
        this.dialog.open(RatingsDetailsComponent, {
            width: '600px',
            data: {recipient: this.user}
        });
    }

    showTasks() {
        this.dialog.open(TaskDetailsComponent, {
            width: '1200px',
            data: {tasks: this.user.tasks, user: this.user}
        });
    }
}

export interface PersonalTasksDialogData {
    tasks: Task[];
    user: User;
}
