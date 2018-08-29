import { NgModule }             from '@angular/core';
import { LoginLayoutComponent } from './login-layout.component';
import { CommonModule }         from '@angular/common';
import { loginRouting }         from './login-layout.routes';
import { LoginLayoutGuard }     from './login-layout.guard';

@NgModule({
    declarations: [
        LoginLayoutComponent
    ],
    imports: [
        loginRouting,
        CommonModule
    ],
    exports: [LoginLayoutComponent],
    providers: [LoginLayoutGuard]
})
export class LoginLayoutModule {
}
