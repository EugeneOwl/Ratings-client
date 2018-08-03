import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }        from '../../component/main/main.component';
import { RoleEditComponent }    from '../../component/role-edit/role-edit.component';
import { HttpClientModule }     from '@angular/common/http';
import { UserEditComponent }    from '../../component/user-edit/user-edit.component';
import { AdminPageComponent }   from '../../component/admin-page/admin-page.component';

const routes: Routes = [
    {path: '', redirectTo: '/client/main', pathMatch: 'full'},
    {path: 'client/main', component: MainComponent},
    {path: 'client/admin', component: AdminPageComponent},
    {path: 'client/admin/role/add', component: RoleEditComponent},
    {path: 'client/admin/role/edit/:id', component: RoleEditComponent},
    {path: 'client/admin/user/edit/:id', component: UserEditComponent},
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

