import { NgModule }           from '@angular/core';
import { AdminPageComponent } from './admin-page.component';
import { RoleListModule }     from '../../module/sections/role/role-list/role-list.module';
import { UserListModule }     from '../../module/sections/user/user-list/user-list.module';
import { AdminToolbarModule } from '../admin-toolbar/admin-toolbar.module';
import { CommonModule }       from '@angular/common';
import { AdminPageGuard }     from './admin-page.guard';
import { TaskListModule }     from '../../module/sections/task/task-list/task-list.module';

@NgModule({
    declarations: [
        AdminPageComponent
    ],
    imports: [
        CommonModule,
        AdminToolbarModule,
        RoleListModule,
        UserListModule,
        TaskListModule
    ],
    exports: [AdminPageComponent],
    providers: [AdminPageGuard]
})
export class AdminPageModule {
}
