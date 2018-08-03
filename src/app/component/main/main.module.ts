import { NgModule }        from '@angular/core';
import { MainComponent }   from './main.component';
import { RouterModule }    from '@angular/router';
import { MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        RouterModule,

        MatButtonModule
    ],
    exports: [MainComponent],
    providers: []
})
export class MainModule {
}
