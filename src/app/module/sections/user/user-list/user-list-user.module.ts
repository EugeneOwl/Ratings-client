import { NgModule }             from '@angular/core';
import { UserListModule }       from './user-list.module';
import { userListRoutingUser }  from './user-list-user.routes';
import { UserDetailsModule }    from '../user-details/user-details.module';
import { NotificationModule }   from '../../../component/notification/notification.module';
import { RatingsDetailsModule } from '../../rating/ratings-details/ratings-details.module';
import { TaskDetailsModule }    from '../../task/task-details/task-details.module';

@NgModule({
    imports: [
        userListRoutingUser,
        UserListModule,
        UserDetailsModule,
        NotificationModule,
        RatingsDetailsModule,
        TaskDetailsModule
    ]
})
export class UserListUserModule {
}
