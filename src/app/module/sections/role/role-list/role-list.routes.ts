import { Routes }            from '@angular/router';
import { RouterModule }      from '@angular/router';
import { RoleListComponent } from './role-list.component';
import { RoleEditComponent } from '../role-edit/role-edit.component';

const routes: Routes = [
    {
        path: '',
        component: RoleListComponent,
        data: {
            displayedColumns: ['id', 'label', 'delete']
        },
    },
    {
        path: ':id',
        component: RoleEditComponent
    }
];

export const roleListRouting = RouterModule.forChild(routes);
