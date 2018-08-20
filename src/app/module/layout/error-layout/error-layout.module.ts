import { NgModule }             from '@angular/core';
import { ErrorLayoutComponent } from './error-layout.component';
import { CommonModule }         from '@angular/common';
import { errorRoutes }          from './error-layout.routes';
import { RouterModule }         from '@angular/router';
import { UserToolbarModule }    from '../../sections/user-toolbar/user-toolbar.module';
import { LoginPanelModule }     from '../../component/login-panel/login-panel.module';

@NgModule({
    declarations: [
        ErrorLayoutComponent
    ],
    imports: [
        RouterModule.forChild(errorRoutes),
        CommonModule,
        LoginPanelModule
    ],
    exports: [ErrorLayoutComponent],
})
export class ErrorLayoutModule {
}
