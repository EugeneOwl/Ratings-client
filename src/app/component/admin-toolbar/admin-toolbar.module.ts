import { NgModule }                 from '@angular/core';
import { AdminToolbarComponent }    from './admin-toolbar.component';
import { MatSidenavModule }         from '@angular/material';
import { MatToolbarModule }         from '@angular/material';
import { MatButtonModule }          from '@angular/material';
import { MatButtonToggleModule }    from '@angular/material';
import { LayoutModule }             from '@angular/cdk/layout';
import { CommonModule }             from '@angular/common';
import { LoginPanelModule }         from '../../module/component/login-panel/login-panel.module';
import { GoToUserSideButtonModule } from '../../module/component/go-to-user-side-button/go-to-user-side-button.module';

@NgModule({
    declarations: [
        AdminToolbarComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,

        LoginPanelModule,
        GoToUserSideButtonModule,

        MatButtonToggleModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule
    ],
    exports: [AdminToolbarComponent],
    providers: []
})
export class AdminToolbarModule {
}
