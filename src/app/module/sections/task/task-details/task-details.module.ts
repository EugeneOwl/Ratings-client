import { NgModule }             from '@angular/core';
import { TaskDetailsComponent } from './task-details.component';
import { MatButtonModule }      from '@angular/material';
import { MatCardModule }        from '@angular/material';
import { CommonModule }         from '@angular/common';
import { TaskListModule }       from '../task-list/task-list.module';

@NgModule({
    declarations: [
        TaskDetailsComponent
    ],
    imports: [
        CommonModule,
        TaskListModule,

        MatCardModule,
        MatButtonModule
    ],
    exports: [TaskDetailsComponent],
    providers: []
})
export class TaskDetailsModule {
}
