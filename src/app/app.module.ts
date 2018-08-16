import { NgModule } from '@angular/core';

import { AppComponent }      from './app.component';
import { UserService }       from './service/user.service';
import { UserListModule }    from './module/sections/user/user-list/user-list.module';
import { RoleService }       from './service/role.service';
import { RoleEditModule }    from './module/sections/role/role-edit/role-edit.module';
import { RoleListModule }    from './module/sections/role/role-list/role-list.module';
import { UserEditModule }    from './module/sections/user/user-edit/user-edit.module';
import { AdminPageModule }   from './component/admin-page/admin-page.module';
import { UserPageModule }    from './component/user-page/user-page.module';
import { UserDetailsModule } from './module/sections/user/user-details/user-details.module';
import { LayoutModule }                        from '@angular/cdk/layout';
import { UserProfileSettingsModule }           from './module/sections/user/user-profile-settings/user-profile-settings.module';
import { GoToUserProfileSettingsButtonModule } from './module/component/go-to-user-profile-setting-button/go-to-user-profile-settings-button.module';
import { NotificationModule }                  from './module/component/notification/notification.module';
import { RatingService }                       from './service/rating.service';
import { RatingsDetailsModule }                from './module/sections/rating/ratings-details/ratings-details.module';
import { LoginPageModule }                     from './component/login-page/login-page.module';
import { AuthModule }                          from './auth/auth.module';
import { HttpModule }                          from '@angular/http';
import { TaskService }                         from './service/task.service';
import { TaskListModule }                      from './module/sections/task/task-list/task-list.module';
import { TaskDetailsModule }                   from './module/sections/task/task-details/task-details.module';
import { TaskEditModule }                      from './module/sections/task/task-edit/task-edit.module';
import { routing }                   from './app.routes';
import { LoginPanelModule }          from './module/component/login-panel/login-panel.module';
import { ErrorPageModule }           from './component/error-page/error-page.module';
import { GoToUserSideButtonModule }  from './module/component/go-to-user-side-button/go-to-user-side-button.module';
import { GoToAdminSideButtonModule } from './module/component/go-to-admin-side-button/go-to-admin-side-button.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        routing,
        LayoutModule,

        AdminPageModule,

        UserPageModule,
        UserListModule,
        UserDetailsModule,
        UserEditModule,
        UserProfileSettingsModule,

        RoleListModule,
        RoleEditModule,

        RatingsDetailsModule,

        TaskListModule,
        TaskEditModule,
        TaskDetailsModule,

        GoToUserProfileSettingsButtonModule,
        GoToUserSideButtonModule,
        GoToAdminSideButtonModule,
        NotificationModule,

        LoginPageModule,
        LoginPanelModule,
        AuthModule,
        HttpModule,

        ErrorPageModule
    ],
    providers: [
        UserService,
        RoleService,
        RatingService,
        TaskService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
