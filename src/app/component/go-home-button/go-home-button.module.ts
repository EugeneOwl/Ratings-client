import { NgModule } from '@angular/core';

import { CommonModule }          from '@angular/common';
import { GoHomeButtonComponent } from './go-home-button.component';
import { RouterModule }          from '@angular/router';
import { MatIconModule }         from '@angular/material';
import { MatButtonModule }       from '@angular/material';

@NgModule({
    declarations: [
        GoHomeButtonComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [GoHomeButtonComponent],
    providers: []
})
export class GoHomeButtonModule {
}
