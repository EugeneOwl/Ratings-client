import { NgModule } from '@angular/core';

import { AppComponent }                                                                      from './app.component';
import { UserService }                                                                       from './service/user.service';
import { UserListModule }                                                                    from './component/user-list/user-list.module';
import { RoutingModule }                                                                     from './module/routing/routing.module';
import { RoleService }                                                                       from './service/role.service';
import { RoleEditModule }                                                                    from './component/role-edit/role-edit.module';
import { RoleListModule }                                                                    from './component/role-list/role-list.module';
import { MainModule }                                                                        from './component/main/main.module';
import { GoHomeButtonModule }                                                                from './component/go-home-button/go-home-button.module';
import { UserEditModule }                                                                    from './component/user-edit/user-edit.module';
import { AdminPageModule }                                                                   from './component/admin-page/admin-page.module';
import { UserPageModule }                                                                    from './component/user-page/user-page.module';
import { UserDetailsModule }                                                                 from './component/user-details/user-details.module';
import { AdminToolbarModule }                                                                from './component/admin-toolbar/admin-toolbar.module';
import { LayoutModule }                                                                      from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { UserToolbarModule }                                                                 from './component/user-toolbar/user-toolbar.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        LayoutModule,
        RoutingModule,

        AdminPageModule,
        AdminToolbarModule,

        UserPageModule,
        UserToolbarModule,
        UserListModule,
        UserDetailsModule,
        UserEditModule,

        RoleListModule,
        RoleEditModule,

        MainModule,
        GoHomeButtonModule,

        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ],
    providers: [
        UserService,
        RoleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
