import { NgModule }                from '@angular/core';
import { RatingsDetailsComponent } from './ratings-details.component';
import { MatButtonModule }         from '@angular/material';
import { MatCardModule }           from '@angular/material';
import { CommonModule }            from '@angular/common';

@NgModule({
    declarations: [
        RatingsDetailsComponent
    ],
    imports: [
        CommonModule,

        MatButtonModule,
        MatCardModule
    ],
    exports: [RatingsDetailsComponent],
    providers: []
})
export class RatingsDetailsModule {
}
