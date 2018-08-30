import { Routes }            from '@angular/router';
import { RouterModule }      from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserEditComponent } from '../user-edit/user-edit.component';

const routes: Routes = [
    {
        path: '',
        component: UserListComponent,
        data: {
            displayedColumns: ['id', 'username', 'roles']
        }
    },
    {
        path: ':id',
        component: UserEditComponent
    }
];

export const userListRoutingAdmin = RouterModule.forChild(routes);
