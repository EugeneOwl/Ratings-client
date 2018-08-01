import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }      from './app.component';
import { UserService }       from './service/user.service';
import { HttpClientModule }  from '@angular/common/http';
import { UserListComponent } from './component/user-list/user-list.component';
import { RoutingModule }     from './module/routing/routing.module';
import { MainComponent }     from './component/main/main.component';
import { RoleListComponent } from './component/role-list/role-list.component';
import { RoleService }       from './service/role.service';
import { FormsModule }       from '@angular/forms';
import { RoleEditModule }    from './component/role-edit/role-edit.module';

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        MainComponent,
        RoleListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RoutingModule,
        RoleEditModule
    ],
    providers: [
        UserService,
        RoleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
