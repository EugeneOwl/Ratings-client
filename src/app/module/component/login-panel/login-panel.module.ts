import { NgModule }            from '@angular/core';
import { LoginPanelComponent } from './login-panel.component';
import { RouterModule }        from '@angular/router';
import { MatButtonModule }     from '@angular/material';
import { CommonModule }        from '@angular/common';

@NgModule({
    declarations: [
        LoginPanelComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

        MatButtonModule
    ],
    exports: [LoginPanelComponent],
    providers: []
})
export class LoginPanelModule {
}
