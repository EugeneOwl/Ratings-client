import { NgModule }           from '@angular/core';
import { RoleListComponent }  from './role-list.component';
import { RouterModule }       from '@angular/router';
import { MatButtonModule }    from '@angular/material';
import { MatTableModule }     from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule }      from '@angular/material';

@NgModule({
    declarations: [
        RoleListComponent
    ],
    imports: [
        RouterModule,

        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule
    ],
    exports: [RoleListComponent],
    providers: []
})
export class RoleListModule {
}
