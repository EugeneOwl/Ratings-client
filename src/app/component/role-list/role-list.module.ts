import { NgModule } from '@angular/core';

import { CommonModule }      from '@angular/common';
import { RoleListComponent } from './role-list.component';
import { RouterModule }      from '@angular/router';
import { UserListModule }    from '../user-list/user-list.module';

@NgModule({
    declarations: [
        RoleListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        UserListModule
    ],
    exports: [RoleListComponent],
    providers: []
})
export class RoleListModule {
}
