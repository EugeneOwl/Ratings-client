import { Routes }            from '@angular/router';
import { RouterModule }      from '@angular/router';
import { TaskListComponent } from './task-list.component';
import { TaskEditComponent } from '../task-edit/task-edit.component';

const routes: Routes = [
    {
        path: '',
        component: TaskListComponent,
        data: {
            displayedColumns: [
                'id',
                'label',
                'description',
                'evaluation',
                'user',
                'parent',
                'delete'
            ],
            ownerId: false,
            adminMode: true
        }
    },
    {
        path: ':id',
        component: TaskEditComponent
    }
];

export const taskListRoutingAdmin = RouterModule.forChild(routes);
