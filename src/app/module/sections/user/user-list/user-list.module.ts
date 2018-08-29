import { NgModule }              from '@angular/core';
import { UserListComponent }     from './user-list.component';
import { MatTableModule }        from '@angular/material';
import { MatButtonModule }       from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatFormFieldModule }    from '@angular/material';
import { MatInputModule }        from '@angular/material';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }          from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { CommonModule }          from '@angular/common';

@NgModule({
    declarations: [
        UserListComponent
    ],
    imports: [
        RouterModule,
        //BrowserAnimationsModule,
        ReactiveFormsModule,
        CommonModule,

        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTableModule,
        MatButtonModule
    ],
    exports: [UserListComponent],
    providers: []
})
export class UserListModule {
}
