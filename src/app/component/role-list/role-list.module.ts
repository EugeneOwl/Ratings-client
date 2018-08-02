import { NgModule } from '@angular/core';

import { CommonModule }            from '@angular/common';
import { RoleListComponent }       from './role-list.component';
import { RouterModule }            from '@angular/router';
import { UserListModule }          from '../user-list/user-list.module';
import { MatButtonModule }         from '@angular/material';
import { GoHomeButtonModule }      from '../go-home-button/go-home-button.module';
import { MatTableModule }          from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule }      from '@angular/material';
import { BrowserModule }           from '@angular/platform-browser';
import { MatSortModule }           from '@angular/material';

@NgModule({
    declarations: [
        RoleListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        UserListModule,
        GoHomeButtonModule,

        BrowserModule,
        BrowserAnimationsModule,
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
