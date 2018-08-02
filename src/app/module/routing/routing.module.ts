import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }        from '../../component/main/main.component';
import { RoleEditComponent }    from '../../component/role-edit/role-edit.component';
import { RoleListComponent }    from '../../component/role-list/role-list.component';
import { HttpClientModule }     from '@angular/common/http';
import { UserEditComponent }    from '../../component/user-edit/user-edit.component';

const routes: Routes=[
    {path: '', redirectTo: '/client/main', pathMatch: 'full'},
    {path: 'client/main', component: MainComponent},
    {path: 'client/list', component: RoleListComponent},
    {path: 'client/list/role/add', component: RoleEditComponent},
    {path: 'client/list/role/edit/:id', component: RoleEditComponent},
    {path: 'client/list/user/edit/:id', component: UserEditComponent},
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

