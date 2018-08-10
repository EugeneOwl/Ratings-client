import { NgModule }           from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { RouterModule }       from '@angular/router';
import { FormsModule }        from '@angular/forms';
import { CommonModule }       from '@angular/common';
import { LoginPageGuard }     from './login-page.guard';

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [LoginPageComponent],
    providers: [LoginPageGuard]
})
export class LoginPageModule {
}
