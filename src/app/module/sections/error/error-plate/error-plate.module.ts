import { NgModule }            from '@angular/core';
import { ErrorPlateComponent } from './error-plate.component';
import { RouterModule }        from '@angular/router';
import { MatIconModule }       from '@angular/material';
import { MatCardModule }       from '@angular/material';
import { errorPlateRouting }   from './error-plate.routes';

@NgModule({
    declarations: [
        ErrorPlateComponent
    ],
    imports: [
        errorPlateRouting,
        RouterModule,

        MatCardModule,
        MatIconModule
    ],
    exports: [ErrorPlateComponent],
    providers: []
})
export class ErrorPlateModule {
}
