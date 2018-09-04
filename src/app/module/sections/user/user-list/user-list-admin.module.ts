import { NgModule }             from '@angular/core';
import { UserListModule }       from './user-list.module';
import { userListRoutingAdmin } from './user-list-admin.routes';
import { UserEditModule }       from '../user-edit/user-edit.module';

@NgModule({
    imports: [
        userListRoutingAdmin,
        UserListModule,
        UserEditModule
    ]
})
export class UserListAdminModule {
}
