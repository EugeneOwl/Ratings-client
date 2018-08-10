import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }        from '../../component/main/main.component';
import { HttpClientModule }     from '@angular/common/http';
import { AdminPageComponent }   from '../../component/admin-page/admin-page.component';
import { UserPageComponent }    from '../../component/user-page/user-page.component';

const routes: Routes = [
    {path: '', redirectTo: '/client/main', pathMatch: 'full'},
    {path: 'client/main', component: MainComponent},
    {path: 'client/admin', component: AdminPageComponent},
    {path: 'client/user', component: UserPageComponent},
    {
        path: 'login',
        loadChildren: './../../auth/login/login.module'
    },
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

