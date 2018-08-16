import { NgModule }              from '@angular/core';
import { GoToAdminSideButtonComponent } from './go-to-admin-side-button.component';
import { RouterModule }          from '@angular/router';
import { MatIconModule }         from '@angular/material';
import { MatButtonModule }       from '@angular/material';

@NgModule({
    declarations: [
        GoToAdminSideButtonComponent
    ],
    imports: [
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports: [GoToAdminSideButtonComponent],
    providers: []
})
export class GoToAdminSideButtonModule {
}
