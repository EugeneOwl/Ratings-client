import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }       from './app.component';
import { UserService }        from './service/user.service';
import { UserListModule }     from './component/user-list/user-list.module';
import { RoutingModule }      from './module/routing/routing.module';
import { RoleService }        from './service/role.service';
import { RoleEditModule }     from './component/role-edit/role-edit.module';
import { RoleListModule }     from './component/role-list/role-list.module';
import { MainModule }         from './component/main/main.module';
import { GoHomeButtonModule } from './component/go-home-button/go-home-button.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        RoleEditModule,
        UserListModule,
        RoleListModule,
        MainModule,
        GoHomeButtonModule
    ],
    providers: [
        UserService,
        RoleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
