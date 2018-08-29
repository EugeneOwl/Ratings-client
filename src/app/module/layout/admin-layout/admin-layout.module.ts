import { NgModule }             from '@angular/core';
import { AdminLayoutComponent } from './admin-layout.component';
import { CommonModule }         from '@angular/common';
import { AdminLayoutGuard }     from './admin-layout.guard';
import { AdminToolbarModule }   from '../../sections/toolbars/admin-toolbar/admin-toolbar.module';
import { adminRouting }         from './admin-layout.routes';
import { RoleListModule }       from '../../sections/role/role-list/role-list.module';
import { UserListModule }       from '../../sections/user/user-list/user-list.module';
import { TaskListModule }       from '../../sections/task/task-list/task-list.module';
import { RoleEditModule }       from '../../sections/role/role-edit/role-edit.module';
import { UserEditModule }       from '../../sections/user/user-edit/user-edit.module';
import { TaskEditModule }       from '../../sections/task/task-edit/task-edit.module';

@NgModule({
    declarations: [
        AdminLayoutComponent
    ],
    imports: [
        adminRouting,
        CommonModule,

        RoleListModule,
        UserListModule,
        TaskListModule,
        RoleEditModule,
        UserEditModule,
        TaskEditModule,
        AdminToolbarModule
    ],
    exports: [AdminLayoutComponent],
    providers: [AdminLayoutGuard]
})
export class AdminLayoutModule {
}
