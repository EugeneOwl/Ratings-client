import { Routes }               from '@angular/router';
import { RouterModule }         from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminLayoutGuard }     from './admin-layout.guard';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AdminLayoutGuard],
        children: [
            {
                path: '',
                loadChildren: '../../sections/task/task-graphic/task-graphic.module#TaskGraphicModule'
            },
            {
                path: 'roles',
                loadChildren: '../../sections/role/role-list/role-list.module#RoleListModule'
            },
            {
                path: 'users',
                loadChildren: '../../sections/user/user-list/user-list-admin.module#UserListAdminModule'
            },
            {
                path: 'tasks',
                loadChildren: '../../sections/task/task-list/task-list-admin.module#TaskListAdminModule'
            },
        ]
    }
];

export const adminRouting = RouterModule.forChild(routes);
