import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }      from '../../component/main/main.component';
import { HttpClientModule }   from '@angular/common/http';
import { AdminPageComponent } from '../../component/admin-page/admin-page.component';
import { UserPageComponent }  from '../../component/user-page/user-page.component';
import { LoginPageComponent } from '../../component/login-page/login-page.component';
import { LoginPageGuard }     from '../../component/login-page/login-page.guard';
import { AdminPageGuard }     from '../../component/admin-page/admin-page.guard';
import { UserPageGuard }      from '../../component/user-page/user-page.guard';

const routes: Routes = [
    {path: '', redirectTo: '/client/login', pathMatch: 'full'},
    {path: 'client/main', component: MainComponent},
    {path: 'client/admin', component: AdminPageComponent, canActivate: [AdminPageGuard]},
    {path: 'client/user', component: UserPageComponent, canActivate: [UserPageGuard]},
    {path: 'client/login', component: LoginPageComponent, canActivate: [LoginPageGuard]}
];

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class RoutingModule {
}

