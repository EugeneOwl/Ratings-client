import { Routes }               from '@angular/router';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginLayoutGuard }     from './login-layout.guard';
import { LoginFormComponent }   from '../../sections/login-form/login-form.component';
import { RouterModule }         from '@angular/router';

const routes: Routes = [
    {
        path: 'client/login', // TODO clear тут же должно быть пусто? А пусто не пашет.
        component: LoginLayoutComponent,
        canActivate: [LoginLayoutGuard],
        children: [
            {
                path: '',
                component: LoginFormComponent
            }
        ]
    }
];

export const loginRouting = RouterModule.forRoot(routes);
