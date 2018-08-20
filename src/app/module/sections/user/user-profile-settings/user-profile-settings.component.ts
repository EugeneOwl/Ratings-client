import { Component, OnInit } from '@angular/core';
import { User }              from '../../../../model/User';
import { UserService }       from '../../../../service/user.service';
import { FormControl }       from '@angular/forms';
import { Validators }        from '@angular/forms';
import { UserUpdate }        from '../../../../model/UserUpdate';
import { ActivatedRoute }    from '@angular/router';
import { Router }            from '@angular/router';

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

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        const userId = JSON.parse(localStorage.getItem('user')).id;
        if (userId) {
            this.userService.get(userId).subscribe(
                (success: User) => {
                    this.user = success;
                    this.mobileNumber.setValue(success.mobileNumber);
                }
            );
        }
    }

    goBack() {
        this.router.navigate(['client/user']);
    }

    saveSettings() {
        const userUpdate: UserUpdate = {
            id: this.user.id,
            mobileNumber: this.mobileNumber.value,
            roleIds: this.user.roles.map(r => r.id)
        };
        this.userService.save(userUpdate).subscribe(result => {
            this.goBack();
        });
    }
}
