import { NgModule }                    from '@angular/core';
import { GoToUserSideButtonComponent } from './go-to-user-side-button.component';
import { RouterModule }                from '@angular/router';
import { MatIconModule }               from '@angular/material';
import { MatButtonModule }             from '@angular/material';

@NgModule({
    declarations: [
        GoToUserSideButtonComponent
    ],
    imports: [
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports: [GoToUserSideButtonComponent],
    providers: []
})
export class GoToUserSideButtonModule {
}
