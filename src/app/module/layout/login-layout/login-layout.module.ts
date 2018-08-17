import { NgModule }             from '@angular/core';
import { LoginLayoutComponent } from './login-layout.component';
import { CommonModule }         from '@angular/common';
import { loginRoutes }          from './login-layout.routes';
import { LoginLayoutGuard }     from './login-layout.guard';
import { RouterModule }         from '@angular/router';

@NgModule({
    declarations: [
        LoginLayoutComponent
    ],
    imports: [
        RouterModule.forChild(loginRoutes),
        CommonModule
    ],
    exports: [LoginLayoutComponent],
    providers: [LoginLayoutGuard]
})
export class LoginLayoutModule {
}
