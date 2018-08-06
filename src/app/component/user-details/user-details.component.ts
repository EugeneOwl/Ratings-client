import { Component, OnInit }     from '@angular/core';
import { Inject }                from '@angular/core';
import { User }                  from '../../model/User';
import { UserService }           from '../../service/user.service';
import { MatDialogRef }          from '@angular/material';
import { MAT_DIALOG_DATA }       from '@angular/material';
import { FormControl }           from '@angular/forms';
import { Validators }            from '@angular/forms';
import { MatDialog }             from '@angular/material';
import { NotificationComponent } from '../notification/notification.component';

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
    currentUser: User;
    label = new FormControl('', [Validators.required]);

    constructor(private userService: UserService,
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
        }
    }

    gotoBack() {
        this.dialogRef.close();
    }

    save(label: string) {
        this.label.setValue('');
        this.dialog.open(NotificationComponent, {
            width: '400px',
            data: {message: `Rating '${label}' from ${this.currentUser.username}
            to ${this.user.username} established`}
        });
    }
}
