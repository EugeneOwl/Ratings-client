import { NgModule }                              from '@angular/core';
import { GoToUserProfileSettingButtonComponent } from './go-to-user-profile-setting-button.component';
import { RouterModule }                          from '@angular/router';
import { MatIconModule }                         from '@angular/material';
import { MatButtonModule }                       from '@angular/material';
import { MatDialogModule }                       from '@angular/material';

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
    providers: []
})
export class GoToUserProfileSettingsButtonModule {
}
