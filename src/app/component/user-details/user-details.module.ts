import { NgModule }             from '@angular/core';
import { UserDetailsComponent } from './user-details.component';
import { MatButtonModule }      from '@angular/material';
import { MatInputModule }       from '@angular/material';
import { MatCardModule }        from '@angular/material';
import { RouterModule }         from '@angular/router';
import { ReactiveFormsModule }  from '@angular/forms';
import { CommonModule }         from '@angular/common';

@NgModule({
    declarations: [
        UserDetailsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,

        MatButtonModule,
        MatInputModule,
        MatCardModule
    ],
    exports: [UserDetailsComponent],
    providers: []
})
export class UserDetailsModule {
}
