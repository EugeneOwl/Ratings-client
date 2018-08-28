import { NgModule }     from '@angular/core';
import { ErrorHandler } from '@angular/core';

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
import { AppErrorHandler }      from './service/errorHandling/app-error-handler';
import { PathLocationStrategy } from '@angular/common';
import { LocationStrategy }     from '@angular/common';
import { ErrorPlateModule }     from './module/component/error-plate/error-plate.module';
import { GoBackButtonModule }   from './module/component/go-back-button/go-back-button.module';
import { TaskGraphicModule }    from './module/sections/task/task-graphic/task-graphic.module';

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
        TaskGraphicModule,

        // components
        GoToUserProfileSettingsButtonModule,
        GoToUserSideButtonModule,
        GoToAdminSideButtonModule,
        GoBackButtonModule,
        LoginPanelModule,

        NotificationModule,

        // security
        AuthModule,

        // errors
        ErrorPlateModule
    ],
    providers: [
        UserService,
        RoleService,
        RatingService,
        TaskService,
        {provide: ErrorHandler, useClass: AppErrorHandler},
        Location,
        {provide: LocationStrategy, useClass: PathLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
