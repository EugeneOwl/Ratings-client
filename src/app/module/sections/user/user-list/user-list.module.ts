import { NgModule }                from '@angular/core';
import { UserListComponent }       from './user-list.component';
import { MatTableModule }          from '@angular/material';
import { MatPaginatorModule }      from '@angular/material';
import { MatSortModule }           from '@angular/material';
import { MatButtonModule }         from '@angular/material';
import { MatButtonToggleModule }   from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { MatFormFieldModule }      from '@angular/material';
import { ReactiveFormsModule }     from '@angular/forms';
import { MatInputModule }          from '@angular/material';

@NgModule({
    declarations: [
        UserListComponent
    ],
    imports: [
        RouterModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,

        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule
    ],
    exports: [UserListComponent],
    providers: []
})
export class UserListModule {
}
