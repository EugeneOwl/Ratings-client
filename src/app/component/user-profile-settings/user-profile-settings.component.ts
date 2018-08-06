import { Component, OnInit } from '@angular/core';
import { Inject }            from '@angular/core';
import { MAT_DIALOG_DATA }   from '@angular/material';
import { MatDialogRef }      from '@angular/material';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { User }              from '../../model/User';
import { UserService }       from '../../service/user.service';
import { FormControl }       from '@angular/forms';
import { Validators }        from '@angular/forms';

@Component({
    selector: 'app-user-profile-settings',
    templateUrl: './user-profile-settings.component.html',
    styleUrls: ['./user-profile-settings.component.css']
})
export class UserProfileSettingsComponent implements OnInit {
    user: User = {
        id: null,
        username: '',
        mobileNumber: '',
        roles: []
    };
    mobileNumber = new FormControl('',
        [Validators.pattern('^((375)([0-9]{9}))$'),
            Validators.required]);

    constructor(private userService: UserService,
                public dialogRef: MatDialogRef<UserEditComponent>,
                @Inject(MAT_DIALOG_DATA) public parentData) {
    }

    ngOnInit() {
        if (this.parentData.id) {
            this.userService.get(this.parentData.id).subscribe((user: User) => {
                if (user) {
                    this.user = user;
                    this.mobileNumber.setValue(user.mobileNumber);
                } else {
                    console.log(`User with id '${this.parentData.id}' not found, returning to list`);
                    this.goBack();
                }
            });
        }
    }

    goBack() {
        this.dialogRef.close();
    }

    saveSettings() {
        this.user.mobileNumber = this.mobileNumber.value;
        this.userService.save(this.user).subscribe(result => {
            this.goBack();
        }, error => console.error(error));
    }
}
