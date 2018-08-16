import { NgModule }           from '@angular/core';
import { RoleListComponent }  from './role-list.component';
import { RouterModule }       from '@angular/router';
import { MatButtonModule }    from '@angular/material';
import { MatTableModule }     from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule }      from '@angular/material';
import { MatDialogModule }    from '@angular/material';
import { RoleEditComponent }  from '../role-edit/role-edit.component';

@NgModule({
    declarations: [
        RoleListComponent
    ],
    imports: [
        RouterModule,

        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule
    ],
    exports: [RoleListComponent],
    entryComponents: [RoleEditComponent],
    providers: []
})
export class RoleListModule {
}
