import { RouterModule, Routes } from '@angular/router';

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
        loadChildren: './module/layout/admin-layout/admin-layout.module#AdminLayoutModule'
    },
    {
        path: 'client/user',
        loadChildren: './module/layout/user-layout/user-layout.module#UserLayoutModule'
    },
    {
        path: 'client/error',
        loadChildren: './module/layout/error-layout/error-layout.module#ErrorLayoutModule'
    },
    {
        path: '**',
        redirectTo: 'client/error/404'
    },
    {
        path: 'client/**',
        redirectTo: 'client/error/404'
    },
    {
        path: 'client/admin/**',
        redirectTo: 'client/error/404'
    }
];

export const appRouting = RouterModule.forRoot(routes);
