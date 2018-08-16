import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent }    from './component/user-page/user-page.component';
import { UserPageGuard }        from './component/user-page/user-page.guard';
import { AdminPageGuard }       from './component/admin-page/admin-page.guard';
import { ErrorPageComponent }   from './component/error-page/error-page.component';
import { AdminPageComponent }   from './component/admin-page/admin-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/client/login',
        pathMatch: 'full'
    },
    {
        path: 'client/login',
        loadChildren: './module/layout/login-layout/login-layout.module#LoginLayoutModule'
    },
    {
        path: 'client/admin',
        component: AdminPageComponent,
        canActivate: [AdminPageGuard]
    },
    {
        path: 'client/user',
        component: UserPageComponent,
        canActivate: [UserPageGuard]
    },
    {
        path: 'client/error',
        component: ErrorPageComponent
    }
];

export const routing = RouterModule.forRoot(routes);
