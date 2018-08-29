import { NgModule }             from '@angular/core';
import { ErrorLayoutComponent } from './error-layout.component';
import { CommonModule }         from '@angular/common';
import { errorRouting }         from './error-layout.routes';
import { ErrorToolbarModule }   from '../../sections/toolbars/error-toolbar/error-toolbar.module';

@NgModule({
    declarations: [
        ErrorLayoutComponent
    ],
    imports: [
        errorRouting,
        CommonModule,
        ErrorToolbarModule
    ],
    exports: [ErrorLayoutComponent],
})
export class ErrorLayoutModule {
}
