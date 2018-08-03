import { NgModule }              from '@angular/core';
import { GoHomeButtonComponent } from './go-home-button.component';
import { RouterModule }          from '@angular/router';
import { MatIconModule }         from '@angular/material';
import { MatButtonModule }       from '@angular/material';

@NgModule({
    declarations: [
        GoHomeButtonComponent
    ],
    imports: [
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports: [GoHomeButtonComponent],
    providers: []
})
export class GoHomeButtonModule {
}
