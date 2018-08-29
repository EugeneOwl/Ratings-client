import { Routes }               from '@angular/router';
import { RouterModule }         from '@angular/router';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginLayoutGuard }     from './login-layout.guard';
import { LoginFormComponent }   from '../../sections/login-form/login-form.component';

const routes: Routes = [
    {
        path: '',
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

export const loginRouting = RouterModule.forChild(routes);
