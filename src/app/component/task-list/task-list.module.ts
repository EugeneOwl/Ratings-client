import { NgModule }           from '@angular/core';
import { TaskListComponent }  from './task-list.component';
import { RouterModule }       from '@angular/router';
import { MatButtonModule }    from '@angular/material';
import { MatTableModule }     from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule }      from '@angular/material';
import { MatDialogModule }    from '@angular/material';
import { RoleEditComponent }  from '../role-edit/role-edit.component';
import { CommonModule }       from '@angular/common';

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
    entryComponents: [RoleEditComponent],
    providers: []
})
export class TaskListModule {
}
