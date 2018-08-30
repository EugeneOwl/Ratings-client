import { NgModule }             from '@angular/core';
import { UserListModule }       from './user-list.module';
import { userListRoutingAdmin } from './user-list-admin.routes';
import { UserEditComponent }    from '../user-edit/user-edit.component';

@NgModule({
    imports: [
        userListRoutingAdmin,
        UserListModule,
        UserEditComponent
    ]
})
export class UserListAdminModule {
}
