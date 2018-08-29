import { NgModule }             from '@angular/core';
import { ErrorLayoutComponent } from './error-layout.component';
import { CommonModule }         from '@angular/common';
import { errorRouting }         from './error-layout.routes';
import { ErrorToolbarModule }   from '../../sections/toolbars/error-toolbar/error-toolbar.module';
import { ErrorPlateModule }     from '../../component/error-plate/error-plate.module';

@NgModule({
    declarations: [
        ErrorLayoutComponent
    ],
    imports: [
        errorRouting,
        CommonModule,
        ErrorPlateModule,
        ErrorToolbarModule
    ],
    exports: [ErrorLayoutComponent],
})
export class ErrorLayoutModule {
}
