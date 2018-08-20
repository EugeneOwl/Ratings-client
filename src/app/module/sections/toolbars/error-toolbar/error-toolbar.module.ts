import { NgModule }              from '@angular/core';
import { ErrorToolbarComponent } from './error-toolbar.component';
import { MatSidenavModule }      from '@angular/material';
import { MatToolbarModule }      from '@angular/material';
import { MatButtonModule }       from '@angular/material';
import { LayoutModule }          from '@angular/cdk/layout';
import { CommonModule }          from '@angular/common';
import { LoginPanelModule }      from '../../../component/login-panel/login-panel.module';
import { RouterModule }          from '@angular/router';
import { GoBackButtonModule }    from '../../../component/go-back-button/go-back-button.module';

@NgModule({
    declarations: [
        ErrorToolbarComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        RouterModule,

        LoginPanelModule,
        GoBackButtonModule,

        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule
    ],
    exports: [ErrorToolbarComponent],
    providers: []
})
export class ErrorToolbarModule {
}
