import { NgModule }             from '@angular/core';
import { taskListRoutingAdmin } from './task-list-admin.routes';
import { TaskListModule }       from './task-list.module';
import { TaskEditModule }       from '../task-edit/task-edit.module';

@NgModule({
    imports: [
        taskListRoutingAdmin,
        TaskListModule,
        TaskEditModule
    ]
})
export class TaskListAdminModule {

}
