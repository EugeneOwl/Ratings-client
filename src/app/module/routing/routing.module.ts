import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../../component/user-list/user-list.component';
import { MainComponent } from '../../component/main/main.component';

const routes: Routes = [
  {path: '', redirectTo: '/client/main', pathMatch: 'full'},
  {path: 'client/main', component: MainComponent},
  {path: 'client/list', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}

