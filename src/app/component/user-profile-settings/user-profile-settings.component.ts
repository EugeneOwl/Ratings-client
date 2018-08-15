import { Component, OnInit } from '@angular/core';
import { Inject }            from '@angular/core';
import { MAT_DIALOG_DATA }   from '@angular/material';
import { MatDialogRef }      from '@angular/material';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { User }              from '../../model/User';
import { UserService }       from '../../service/user.service';
import { FormControl }       from '@angular/forms';
import { Validators }        from '@angular/forms';
import { UserUpdate }        from '../../model/UserUpdate';

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
        roles: [],
        tasks: []
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
            this.userService.get(this.parentData.id).subscribe(
                (success: User) => {
                    this.user = success;
                    this.mobileNumber.setValue(success.mobileNumber);
                }, error => {
                    console.log(error);
                    this.goBack();
                }
            );
        }
    }

    goBack() {
        this.dialogRef.close();
    }

    saveSettings() {
        const userUpdate: UserUpdate = {
            id: this.user.id,
            mobileNumber: this.mobileNumber.value,
            roleIds: this.user.roles.map(r => r.id)
        };
        this.userService.save(userUpdate).subscribe(result => {
            this.goBack();
        }, error => console.error(error));
    }
}
