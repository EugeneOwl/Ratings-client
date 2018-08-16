import { NgModule }                            from '@angular/core';
import { UserToolbarComponent }                from './user-toolbar.component';
import { MatSidenavModule }                    from '@angular/material';
import { MatToolbarModule }                    from '@angular/material';
import { MatButtonModule }                     from '@angular/material';
import { MatButtonToggleModule }               from '@angular/material';
import { LayoutModule }                        from '@angular/cdk/layout';
import { CommonModule }                        from '@angular/common';
import { GoToUserProfileSettingsButtonModule } from '../go-to-user-profile-setting-button/go-to-user-profile-settings-button.module';
import { LoginPanelModule }                    from '../login-panel/login-panel.module';
import { GoToAdminSideButtonModule }           from '../go-to-admin-side-button/go-to-admin-side-button.module';

@NgModule({
    declarations: [
        UserToolbarComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,

        GoToUserProfileSettingsButtonModule,
        LoginPanelModule,
        GoToAdminSideButtonModule,

        MatButtonToggleModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule
    ],
    exports: [UserToolbarComponent],
    providers: []
})
export class UserToolbarModule {
}
