import { Routes }               from '@angular/router';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginLayoutGuard }     from './login-layout.guard';

const routes: Routes = [
    {
        path: 'client/login', // TODO clear тут же должно быть пусто? А пусто не пашет.
        component: LoginLayoutComponent,
        canActivate: [LoginLayoutGuard]
    }
];

export const loginRoutes = routes;
