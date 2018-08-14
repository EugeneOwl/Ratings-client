import { NgModule }           from '@angular/core';
import { TaskListComponent }  from './task-list.component';
import { RouterModule }       from '@angular/router';
import { MatButtonModule }    from '@angular/material';
import { MatTableModule }     from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule }      from '@angular/material';
import { MatDialogModule }    from '@angular/material';
import { CommonModule }       from '@angular/common';
import { TaskEditComponent }  from '../task-edit/task-edit.component';
import { TaskChartComponent } from '../task-chart/task-chart.component';

@NgModule({
    declarations: [
        TaskListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule
    ],
    exports: [TaskListComponent],
    entryComponents: [
        TaskEditComponent,
        TaskChartComponent
    ],
    providers: []
})
export class TaskListModule {
}
