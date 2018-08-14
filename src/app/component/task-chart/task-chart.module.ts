import { NgModule }             from '@angular/core';
import { TaskChartComponent } from './task-chart.component';
import { MatButtonModule }      from '@angular/material';
import { MatCardModule }        from '@angular/material';
import { CommonModule }         from '@angular/common';
import { TaskListModule }       from '../task-list/task-list.module';

@NgModule({
    declarations: [
        TaskChartComponent
    ],
    imports: [
        CommonModule,
        TaskListModule,

        MatCardModule,
        MatButtonModule
    ],
    exports: [TaskChartComponent],
    providers: []
})
export class TaskChartModule {
}
