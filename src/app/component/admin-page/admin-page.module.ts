import { NgModule }           from '@angular/core';
import { AdminPageComponent } from './admin-page.component';
import { GoHomeButtonModule } from '../go-home-button/go-home-button.module';
import { RoleListModule }     from '../role-list/role-list.module';
import { UserListModule }     from '../user-list/user-list.module';

@NgModule({
    declarations: [
        AdminPageComponent
    ],
    imports: [
        GoHomeButtonModule,
        RoleListModule,
        UserListModule
    ],
    exports: [AdminPageComponent],
    providers: []
})
export class AdminPageModule {
}
