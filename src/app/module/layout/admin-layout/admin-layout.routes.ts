import { Routes }               from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminLayoutGuard }     from './admin-layout.guard';
import { UserListComponent }       from '../../sections/user/user-list/user-list.component';
import { TaskListComponent }       from '../../sections/task/task-list/task-list.component';
import { RoleListComponent }       from '../../sections/role/role-list/role-list.component';
import { UserEditComponent }       from '../../sections/user/user-edit/user-edit.component';
import { TaskEditComponent }       from '../../sections/task/task-edit/task-edit.component';
import { RoleEditComponent }       from '../../sections/role/role-edit/role-edit.component';
import { TaskStatisticsComponent } from '../../sections/task/task-statistics/task-statistics.component';

const routes: Routes = [
    {
        path: 'client/admin',
        component: AdminLayoutComponent,
        canActivate: [AdminLayoutGuard],
        children: [
            {
                path: '',
                component: TaskStatisticsComponent
            },
            {
                path: 'roles',
                component: RoleListComponent,
                data: {
                    displayedColumns: ['id', 'label']
                }
            },
            {
                path: 'roles/:id',
                component: RoleEditComponent
            },
            {
                path: 'users',
                component: UserListComponent,
                data: {
                    displayedColumns: ['id', 'username', 'roles']
                }
            },
            {
                path: 'users/:id',
                component: UserEditComponent
            },
            {
                path: 'tasks',
                component: TaskListComponent,
                data: {
                    displayedColumns: [
                        'id',
                        'label',
                        'description',
                        'evaluation',
                        'user',
                        'parent'
                    ],
                    customDatasource: false,
                    adminMode: true
                }
            },
            {
                path: 'tasks/:id',
                component: TaskEditComponent
            }
        ]
    }
];

export const adminRoutes = routes;
