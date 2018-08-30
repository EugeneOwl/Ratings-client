import { NgModule }              from '@angular/core';
import { RoleListComponent }     from './role-list.component';
import { RouterModule }          from '@angular/router';
import { MatButtonModule }       from '@angular/material';
import { MatTableModule }        from '@angular/material';
import { MatInputModule }        from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatFormFieldModule }    from '@angular/material';
import { ReactiveFormsModule }   from '@angular/forms';
import { CommonModule }          from '@angular/common';
import { roleListRouting }       from './role-list.routes';
import { RoleEditModule }        from '../role-edit/role-edit.module';

@NgModule({
    declarations: [
        RoleListComponent
    ],
    imports: [
        roleListRouting,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,

        RoleEditModule,

        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTableModule,
        MatButtonModule
    ],
    exports: [RoleListComponent],
    providers: []
})
export class RoleListModule {
}
