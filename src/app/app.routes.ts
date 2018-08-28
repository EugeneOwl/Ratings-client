import { RouterModule, Routes } from '@angular/router';
import { TaskGraphicComponent } from './module/sections/task-graphic/task-graphic.component';

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
        path: 'client/chart',
        component: TaskGraphicComponent
    },
    {
        path: '**',
        redirectTo: 'client/error'
    }
];

export const routing = RouterModule.forRoot(routes);
