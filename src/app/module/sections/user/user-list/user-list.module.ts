import { NgModule }                from '@angular/core';
import { UserListComponent }       from './user-list.component';
import { MatTableModule }          from '@angular/material';
import { MatPaginatorModule }      from '@angular/material';
import { MatSortModule }           from '@angular/material';
import { MatButtonModule }         from '@angular/material';
import { MatDialogModule }         from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';

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
    providers: []
})
export class UserListModule {
}
