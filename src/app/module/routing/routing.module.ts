import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../../component/user-list/user-list.component';
import { MainComponent } from '../../component/main/main.component';
import { RoleEditComponent } from '../../component/role-edit/role-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/client/main', pathMatch: 'full'},
  {path: 'client/main', component: MainComponent},
  {path: 'client/list', component: UserListComponent},
  {path: 'client/list/role/add', component: RoleEditComponent},
  {path: 'client/list/role/edit/:id', component: RoleEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}

