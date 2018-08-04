import { Component, OnInit } from '@angular/core';
import { OnDestroy }         from '@angular/core';
import { User }              from '../../model/User';
import { Subscription }      from 'rxjs';
import { Router }            from '@angular/router';
import { ActivatedRoute }    from '@angular/router';
import { UserService }       from '../../service/user.service';
import { MatDialogRef }      from '@angular/material';
import { RoleEditComponent } from '../role-edit/role-edit.component';
import { MAT_DIALOG_DATA }   from '@angular/material';
import { Inject }            from '@angular/core';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    user: User;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                public dialogRef: MatDialogRef<UserDetailsComponent>,
                @Inject(MAT_DIALOG_DATA) public parentData) {
    }

    ngOnInit() {
        if (this.parentData.id) {
            this.userService.get(this.parentData.id).subscribe((user: User) => {
                if (user) {
                    this.user = user;
                } else {
                    console.log(`User with id '${this.parentData.id}' not found, returning to list`);
                    this.gotoBack();
                }
            });
        }
    }

    gotoBack() {
        this.dialogRef.close();
    }
}
