import { NgModule }            from '@angular/core';
import { UserEditComponent }   from './user-edit.component';
import { MatButtonModule }     from '@angular/material';
import { MatInputModule }      from '@angular/material';
import { RouterModule }        from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule }        from '@angular/common';
import { MatCheckboxModule }   from '@angular/material';
import { MatCardModule }       from '@angular/material';
import { FormsModule }         from '@angular/forms';

@NgModule({
    declarations: [
        UserEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatCardModule
    ],
    exports: [UserEditComponent],
    providers: []
})
export class UserEditModule {
}
