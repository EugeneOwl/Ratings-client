import { NgModule }              from '@angular/core';
import { GoBackButtonComponent } from './go-back-button.component';
import { RouterModule }          from '@angular/router';
import { MatButtonModule }       from '@angular/material';

@NgModule({
    declarations: [
        GoBackButtonComponent
    ],
    imports: [
        RouterModule,

        MatButtonModule
    ],
    exports: [GoBackButtonComponent],
    providers: []
})
export class GoBackButtonModule {
}
