import { Routes }               from '@angular/router';
import { RouterModule }         from '@angular/router';
import { ErrorLayoutComponent } from './error-layout.component';

const routes: Routes = [
    {
        path: '',
        component: ErrorLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: '../../sections/error/error-plate/error-plate.module#ErrorPlateModule'
            }
        ]
    }
];

export const errorRouting = RouterModule.forChild(routes);
