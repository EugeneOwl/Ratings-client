import { NgModule }             from '@angular/core';
import { AdminLayoutComponent } from './admin-layout.component';
import { CommonModule }         from '@angular/common';
import { AdminLayoutGuard }     from './admin-layout.guard';
import { AdminToolbarModule }   from '../../sections/toolbars/admin-toolbar/admin-toolbar.module';
import { adminRouting }         from './admin-layout.routes';

@NgModule({
    declarations: [
        AdminLayoutComponent
    ],
    imports: [
        adminRouting,
        CommonModule,

        AdminToolbarModule
    ],
    exports: [AdminLayoutComponent],
    providers: [AdminLayoutGuard]
})
export class AdminLayoutModule {
}
