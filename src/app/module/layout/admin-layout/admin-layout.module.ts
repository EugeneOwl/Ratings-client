import { NgModule }             from '@angular/core';
import { AdminLayoutComponent } from './admin-layout.component';
import { CommonModule }         from '@angular/common';
import { adminRoutes }          from './admin-layout.routes';
import { RouterModule }         from '@angular/router';
import { AdminLayoutGuard }     from './admin-layout.guard';
import { AdminToolbarModule }   from '../../sections/toolbars/admin-toolbar/admin-toolbar.module';

@NgModule({
    declarations: [
        AdminLayoutComponent
    ],
    imports: [
        RouterModule.forChild(adminRoutes),
        CommonModule,
        AdminToolbarModule
    ],
    exports: [AdminLayoutComponent],
    providers: [AdminLayoutGuard]
})
export class AdminLayoutModule {
}
