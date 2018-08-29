import { Routes }               from '@angular/router';
import { RouterModule }         from '@angular/router';
import { ErrorLayoutComponent } from './error-layout.component';
import { ErrorPlateComponent }  from '../../component/error-plate/error-plate.component';

const routes: Routes = [
    {
        path: '',
        component: ErrorLayoutComponent,
        children: [
            {
                path: '',
                component: ErrorPlateComponent
            },
            {
                path: '404',
                component: ErrorPlateComponent,
                data: {
                    errorCode: 404,
                    errorMessage: 'URL not found.'
                }
            }
        ]
    }
];

export const errorRouting = RouterModule.forChild(routes);
