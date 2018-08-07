import { NgModule } from '@angular/core';

import { AppComponent }                        from './app.component';
import { UserService }                         from './service/user.service';
import { UserListModule }                      from './component/user-list/user-list.module';
import { RoutingModule }                       from './module/routing/routing.module';
import { RoleService }                         from './service/role.service';
import { RoleEditModule }                      from './component/role-edit/role-edit.module';
import { RoleListModule }                      from './component/role-list/role-list.module';
import { MainModule }                          from './component/main/main.module';
import { GoHomeButtonModule }                  from './component/go-home-button/go-home-button.module';
import { UserEditModule }                      from './component/user-edit/user-edit.module';
import { AdminPageModule }                     from './component/admin-page/admin-page.module';
import { UserPageModule }                      from './component/user-page/user-page.module';
import { UserDetailsModule }                   from './component/user-details/user-details.module';
import { LayoutModule }                        from '@angular/cdk/layout';
import { UserProfileSettingsModule }           from './component/user-profile-settings/user-profile-settings.module';
import { GoToUserProfileSettingsButtonModule } from './component/go-to-user-profile-setting-button/go-to-user-profile-settings-button.module';
import { NotificationModule }                  from './component/notification/notification.module';
import { RatingService }                       from './service/rating.service';
import { RatingsDetailsModule }                from './component/ratings-details/ratings-details.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        LayoutModule,
        RoutingModule,

        AdminPageModule,

        UserPageModule,
        UserListModule,
        UserDetailsModule,
        UserEditModule,
        UserProfileSettingsModule,

        RoleListModule,
        RoleEditModule,

        RatingsDetailsModule,

        MainModule,
        GoHomeButtonModule,
        GoToUserProfileSettingsButtonModule,
        NotificationModule
    ],
    providers: [
        UserService,
        RoleService,
        RatingService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
