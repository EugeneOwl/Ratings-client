import { NgModule }                from '@angular/core';
import { UserListComponent }       from './user-list.component';
import { MatTableModule }          from '@angular/material';
import { MatPaginatorModule }      from '@angular/material';
import { MatSortModule }           from '@angular/material';
import { MatButtonModule }         from '@angular/material';
import { MatDialogModule }         from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { UserDetailsComponent }    from '../user-details/user-details.component';
import { UserEditComponent }       from '../user-edit/user-edit.component';

@NgModule({
    declarations: [
        UserListComponent
    ],
    imports: [
        RouterModule,
        BrowserAnimationsModule,

        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule
    ],
    exports: [UserListComponent],
    entryComponents: [
        UserEditComponent,
        UserDetailsComponent
    ],
    providers: []
})
export class UserListModule {
}
