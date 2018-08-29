import { Routes }               from '@angular/router';
import { RouterModule }         from '@angular/router';
import { TaskGraphicComponent } from './task-graphic.component';

const routes: Routes = [
    {
        path: '',
        component: TaskGraphicComponent
    }
];

export const taskGraphicRouting = RouterModule.forChild(routes);
