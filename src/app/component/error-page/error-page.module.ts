import { NgModule }           from '@angular/core';
import { ErrorPageComponent } from './error-page.component';
import { RouterModule }       from '@angular/router';
import { MatButtonModule }    from '@angular/material';
import { CommonModule }       from '@angular/common';
import { LoginPanelModule }   from '../../module/component/login-panel/login-panel.module';

@NgModule({
    declarations: [
        ErrorPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

        LoginPanelModule,

        MatButtonModule
    ],
    exports: [ErrorPageComponent],
    providers: []
})
export class ErrorPageModule {
}
