import { NgModule }             from '@angular/core';
import { LoginLayoutComponent } from './login-layout.component';
import { CommonModule }         from '@angular/common';
import { loginRouting }         from './login-layout.routes';
import { LoginLayoutGuard }     from './login-layout.guard';
import { LoginFormModule }      from '../../sections/login-form/login-form.module';

@NgModule({
    declarations: [
        LoginLayoutComponent
    ],
    imports: [
        loginRouting,
        CommonModule,

        LoginFormModule
    ],
    exports: [LoginLayoutComponent],
    providers: [LoginLayoutGuard]
})
export class LoginLayoutModule {
}
