import { Component, OnInit }            from '@angular/core';
import { MatDialog }                    from '@angular/material';
import { UserProfileSettingsComponent } from '../../sections/user/user-profile-settings/user-profile-settings.component';

@Component({
    selector: 'app-go-to-user-profile-setting-button',
    templateUrl: './go-to-user-profile-setting-button.component.html',
    styleUrls: ['./go-to-user-profile-setting-button.component.css']
})
export class GoToUserProfileSettingButtonComponent implements OnInit {

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    goToSettings() {
        this.dialog.open(UserProfileSettingsComponent, {
            width: '800px',
            data: {id: JSON.parse(localStorage.getItem('user')).id} // TODO: dehardcode user id (get current user from session or smth lk th
        });
    }
}
