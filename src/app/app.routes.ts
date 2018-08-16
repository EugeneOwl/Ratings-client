import {RouterModule, Routes} from '@angular/router';
import { UserPageComponent }  from './component/user-page/user-page.component';
import { UserPageGuard }      from './component/user-page/user-page.guard';
import { LoginPageGuard }     from './component/login-page/login-page.guard';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { AdminPageGuard }     from './component/admin-page/admin-page.guard';
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';

const routes: Routes = [
    {path: '', redirectTo: '/client/login', pathMatch: 'full'},
    {path: 'client/admin', component: AdminPageComponent, canActivate: [AdminPageGuard]},
    {path: 'client/user', component: UserPageComponent, canActivate: [UserPageGuard]},
    {path: 'client/login', component: LoginPageComponent, canActivate: [LoginPageGuard]},
    {path: 'client/error', component: ErrorPageComponent}
];

export const routing = RouterModule.forRoot(routes);
