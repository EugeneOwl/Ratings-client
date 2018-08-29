import { Routes }                       from '@angular/router';
import { RouterModule }                 from '@angular/router';
import { UserLayoutComponent }          from './user-layout.component';
import { UserLayoutGuard }              from './user-layout.guard';
import { UserListComponent }            from '../../sections/user/user-list/user-list.component';
import { UserDetailsComponent }         from '../../sections/user/user-details/user-details.component';
import { UserProfileSettingsComponent } from '../../sections/user/user-profile-settings/user-profile-settings.component';
import { RatingsDetailsComponent }      from '../../sections/rating/ratings-details/ratings-details.component';
import { TaskDetailsComponent }         from '../../sections/task/task-details/task-details.component';

const routes: Routes = [
    {
        path: '',
        component: UserLayoutComponent,
        canActivate: [UserLayoutGuard],
        children: [
            {
                path: '',
                redirectTo: 'users',
                pathMatch: 'full'
            },
            {
                path: 'users',
                component: UserListComponent,
                data: {
                    displayedColumns: ['id', 'username']
                }
            },
            {
                path: 'users/:id',
                component: UserDetailsComponent,
            },
            {
                path: 'users/:id/ratings',
                component: RatingsDetailsComponent
            },
            {
                path: 'users/:id/tasks',
                component: TaskDetailsComponent
            },
            {
                path: 'profile-settings',
                component: UserProfileSettingsComponent
            }
        ]
    }
];

export const userRouting = RouterModule.forChild(routes);
