import { Routes }               from '@angular/router';
import { ErrorLayoutComponent } from './error-layout.component';
import { ErrorPlateComponent }  from '../../component/error-plate/error-plate.component';
import { RouterModule }         from '@angular/router';

const routes: Routes = [
    {
        path: 'client/error',
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

export const errorRouting = RouterModule.forRoot(routes);
