import { NgModule } from '@angular/core';

import { CommonModule }        from '@angular/common';
import { MatButtonModule }     from '@angular/material';
import { RoleEditComponent }   from './role-edit.component';
import { FormsModule }         from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RoleEditComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    exports: [RoleEditComponent],
    providers: []
})
export class RoleEditModule {
}
