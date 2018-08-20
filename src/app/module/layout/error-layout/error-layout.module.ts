import { NgModule }             from '@angular/core';
import { ErrorLayoutComponent } from './error-layout.component';
import { CommonModule }         from '@angular/common';
import { errorRoutes }          from './error-layout.routes';
import { RouterModule }         from '@angular/router';
import { ErrorToolbarModule }   from '../../sections/toolbars/error-toolbar/error-toolbar.module';

@NgModule({
    declarations: [
        ErrorLayoutComponent
    ],
    imports: [
        RouterModule.forChild(errorRoutes),
        CommonModule,
        ErrorToolbarModule
    ],
    exports: [ErrorLayoutComponent],
})
export class ErrorLayoutModule {
}
