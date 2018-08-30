import { NgModule }              from '@angular/core';
import { TaskListComponent }     from './task-list.component';
import { RouterModule }          from '@angular/router';
import { MatButtonModule }       from '@angular/material';
import { MatTableModule }        from '@angular/material';
import { MatInputModule }        from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatFormFieldModule }    from '@angular/material';
import { CommonModule }          from '@angular/common';
import { ReactiveFormsModule }   from '@angular/forms';
import { TaskEditModule }        from '../task-edit/task-edit.module';

@NgModule({
    declarations: [
        TaskListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,

        TaskEditModule,

        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTableModule,
        MatButtonModule
    ],
    exports: [TaskListComponent],
    providers: []
})
export class TaskListModule {
}
