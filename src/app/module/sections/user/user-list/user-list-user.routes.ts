import { Routes }                  from '@angular/router';
import { RouterModule }            from '@angular/router';
import { UserListComponent }       from './user-list.component';
import { UserDetailsComponent }    from '../user-details/user-details.component';
import { RatingsDetailsComponent } from '../../rating/ratings-details/ratings-details.component';
import { TaskDetailsComponent }    from '../../task/task-details/task-details.component';

const routes: Routes = [
    {
        path: '',
        component: UserListComponent,
        data: {
            displayedColumns: ['id', 'username']
        }
    },
    {
        path: ':id',
        component: UserDetailsComponent
    },
    {
        path: ':id/ratings',
        component: RatingsDetailsComponent
    },
    {
        path: ':id/tasks',
        component: TaskDetailsComponent
    }
];

export const userListRoutingUser = RouterModule.forChild(routes);
