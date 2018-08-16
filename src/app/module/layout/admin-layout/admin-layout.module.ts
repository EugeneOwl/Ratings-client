import { NgModule }             from '@angular/core';
import { AdminLayoutComponent } from './admin-layout.component';
import { CommonModule }         from '@angular/common';
import { AdminToolbarModule }   from '../../../component/admin-toolbar/admin-toolbar.module';
import { RoleListModule }       from '../../sections/role/role-list/role-list.module';
import { UserListModule }       from '../../sections/user/user-list/user-list.module';
import { TaskListModule }       from '../../sections/task/task-list/task-list.module';
import { adminRouting }         from './admin-layout.routes';

@NgModule({
    declarations: [
        AdminLayoutComponent
    ],
    imports: [
        adminRouting,
        CommonModule,
        AdminToolbarModule,
        RoleListModule,
        UserListModule,
        TaskListModule
    ],
    exports: [AdminLayoutComponent],
    providers: []
})
export class AdminLayoutModule {
}
