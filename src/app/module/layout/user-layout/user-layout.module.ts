import { NgModule }                  from '@angular/core';
import { UserLayoutComponent }       from './user-layout.component';
import { CommonModule }              from '@angular/common';
import { userRouting }               from './user-layout.routes';
import { UserLayoutGuard }           from './user-layout.guard';
import { UserToolbarModule }         from '../../sections/toolbars/user-toolbar/user-toolbar.module';
import { UserListModule }            from '../../sections/user/user-list/user-list.module';
import { UserDetailsModule }         from '../../sections/user/user-details/user-details.module';
import { NotificationModule }        from '../../component/notification/notification.module';
import { RatingsDetailsModule }      from '../../sections/rating/ratings-details/ratings-details.module';
import { TaskDetailsModule }         from '../../sections/task/task-details/task-details.module';
import { UserProfileSettingsModule } from '../../sections/user/user-profile-settings/user-profile-settings.module';

@NgModule({
    declarations: [
        UserLayoutComponent
    ],
    imports: [
        userRouting,
        CommonModule,

        UserListModule,
        UserDetailsModule,
        NotificationModule,
        RatingsDetailsModule,
        TaskDetailsModule,
        UserProfileSettingsModule,
        UserToolbarModule
    ],
    exports: [UserLayoutComponent],
    providers: [UserLayoutGuard]
})
export class UserLayoutModule {
}
