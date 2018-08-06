import { Component, OnInit } from '@angular/core';
import { Inject }            from '@angular/core';
import { User }              from '../../model/User';
import { UserService }       from '../../service/user.service';
import { MatDialogRef }      from '@angular/material';
import { MAT_DIALOG_DATA }   from '@angular/material';

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

    constructor(private userService: UserService,
                public dialogRef: MatDialogRef<UserDetailsComponent>,
                @Inject(MAT_DIALOG_DATA) public parentData) {
    }

    ngOnInit() {
        if (this.parentData.id) {
            this.userService.get(this.parentData.id).subscribe(
                success => {
                    this.user = success;
                },
                error => {
                    console.log(error.erroe.message);
                    console.log(`User with id '${this.parentData.id}' not found, returning to list`);
                    this.gotoBack();
                }
            );
        }
    }

    gotoBack() {
        this.dialogRef.close();
    }
}
