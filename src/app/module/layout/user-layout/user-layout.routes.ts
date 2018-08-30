import { Routes }              from '@angular/router';
import { RouterModule }        from '@angular/router';
import { UserLayoutComponent } from './user-layout.component';
import { UserLayoutGuard }     from './user-layout.guard';

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
                loadChildren: '../../sections/user/user-list/user-list-user.module#UserListUserModule'
            },
            {
                path: 'profile-settings',
                loadChildren: '../../sections/user/user-profile-settings/user-profile-settings.module#UserProfileSettingsModule'
            }
        ]
    }
];

export const userRouting = RouterModule.forChild(routes);
