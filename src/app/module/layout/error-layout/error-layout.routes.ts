import { Routes }               from '@angular/router';
import { ErrorLayoutComponent } from './error-layout.component';
import { ErrorPlateComponent }  from '../../component/error-plate/error-plate.component';

const routes: Routes = [
    {
        path: 'client/error',
        component: ErrorLayoutComponent,
        children: [
            {
                path: '',
                component: ErrorPlateComponent
            }
        ]
    }
];

export const errorRoutes = routes;
