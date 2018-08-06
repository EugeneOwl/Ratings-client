import { NgModule }                              from '@angular/core';
import { GoToUserProfileSettingButtonComponent } from './go-to-user-profile-setting-button.component';
import { RouterModule }                          from '@angular/router';
import { MatIconModule }                         from '@angular/material';
import { MatButtonModule }                       from '@angular/material';
import { MatDialogModule }                       from '@angular/material';
import { UserProfileSettingsComponent }          from '../user-profile-settings/user-profile-settings.component';

@NgModule({
    declarations: [
        GoToUserProfileSettingButtonComponent
    ],
    imports: [
        RouterModule,

        MatDialogModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [GoToUserProfileSettingButtonComponent],
    entryComponents: [UserProfileSettingsComponent],
    providers: []
})
export class GoToUserProfileSettingsButtonModule {
}
