import { NgModule }           from '@angular/core';
import { AdminPageComponent } from './admin-page.component';
import { RoleListModule }     from '../role-list/role-list.module';
import { UserListModule }     from '../user-list/user-list.module';
import { AdminToolbarModule } from '../admin-toolbar/admin-toolbar.module';
import { CommonModule }       from '@angular/common';

@NgModule({
    declarations: [
        AdminPageComponent
    ],
    imports: [
        CommonModule,
        AdminToolbarModule,
        RoleListModule,
        UserListModule
    ],
    exports: [AdminPageComponent],
    providers: []
})
export class AdminPageModule {
}
