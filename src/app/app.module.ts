import { NgModule } from '@angular/core';

import { AppComponent }                        from './app.component';
import { UserService }                         from './service/user.service';
import { UserListModule }                      from './module/sections/user/user-list/user-list.module';
import { RoleService }                         from './service/role.service';
import { RoleEditModule }                      from './module/sections/role/role-edit/role-edit.module';
import { RoleListModule }                      from './module/sections/role/role-list/role-list.module';
import { UserEditModule }                      from './module/sections/user/user-edit/user-edit.module';
import { UserDetailsModule }                   from './module/sections/user/user-details/user-details.module';
import { LayoutModule }                        from '@angular/cdk/layout';
import { UserProfileSettingsModule }           from './module/sections/user/user-profile-settings/user-profile-settings.module';
import { GoToUserProfileSettingsButtonModule } from './module/component/go-to-user-profile-setting-button/go-to-user-profile-settings-button.module';
import { NotificationModule }                  from './module/component/notification/notification.module';
import { RatingService }                       from './service/rating.service';
import { RatingsDetailsModule }                from './module/sections/rating/ratings-details/ratings-details.module';
import { AuthModule }                          from './service/auth/auth.module';
import { HttpModule }                          from '@angular/http';
import { TaskService }                         from './service/task.service';
import { TaskListModule }                      from './module/sections/task/task-list/task-list.module';
import { TaskDetailsModule }                   from './module/sections/task/task-details/task-details.module';
import { TaskEditModule }                      from './module/sections/task/task-edit/task-edit.module';
import { routing }                             from './app.routes';
import { LoginPanelModule }                    from './module/component/login-panel/login-panel.module';
import { GoToUserSideButtonModule }            from './module/component/go-to-user-side-button/go-to-user-side-button.module';
import { GoToAdminSideButtonModule }           from './module/component/go-to-admin-side-button/go-to-admin-side-button.module';
import { LoginLayoutModule }                   from './module/layout/login-layout/login-layout.module';
import { AdminLayoutModule }                   from './module/layout/admin-layout/admin-layout.module';
import { LoginFormModule }                     from './module/sections/login-form/login-form.module';
import { UserLayoutModule }                    from './module/layout/user-layout/user-layout.module';
import { ErrorLayoutModule }                   from './module/layout/error-layout/error-layout.module';
import { TaskStatisticsModule }                from './module/sections/task/task-statistics/task-statistics.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // built-in
        LayoutModule,
        HttpModule,

        // routing
        routing,

        // layout
        AdminLayoutModule,
        UserLayoutModule,
        LoginLayoutModule,
        ErrorLayoutModule,

        // sections
        UserListModule,
        RoleListModule,
        TaskListModule,

        UserDetailsModule,
        TaskDetailsModule,
        RatingsDetailsModule,

        UserEditModule,
        RoleEditModule,
        TaskEditModule,

        UserProfileSettingsModule,
        LoginFormModule,
        TaskStatisticsModule,

        // components
        GoToUserProfileSettingsButtonModule,
        GoToUserSideButtonModule,
        GoToAdminSideButtonModule,
        LoginPanelModule,

        NotificationModule,

        // security
        AuthModule
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
