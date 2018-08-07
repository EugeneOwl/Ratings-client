import { NgModule }                from '@angular/core';
import { RatingsDetailsComponent } from './ratings-details.component';
import { MatButtonModule }         from '@angular/material';
import { MatCardModule }           from '@angular/material';
import { CommonModule }            from '@angular/common';
import { MatIconModule }           from '@angular/material';

@NgModule({
    declarations: [
        RatingsDetailsComponent
    ],
    imports: [
        CommonModule,

        MatIconModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [RatingsDetailsComponent],
    providers: []
})
export class RatingsDetailsModule {
}
