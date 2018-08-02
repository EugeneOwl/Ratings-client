import { NgModule } from '@angular/core';

import { CommonModule }            from '@angular/common';
import { UserListComponent }       from './user-list.component';
import { MatTableModule }          from '@angular/material';
import { MatPaginatorModule }      from '@angular/material';
import { MatSortModule }           from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule }           from '@angular/platform-browser';

@NgModule({
    declarations: [
        UserListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ],
    exports: [UserListComponent],
    providers: []
})
export class UserListModule {
}
