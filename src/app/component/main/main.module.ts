import { NgModule } from '@angular/core';

import { CommonModule }    from '@angular/common';
import { MainComponent }   from './main.component';
import { RouterModule }    from '@angular/router';
import { MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule
    ],
    exports: [MainComponent],
    providers: []
})
export class MainModule {
}
