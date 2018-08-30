import { RouterModule }        from '@angular/router';
import { Routes }              from '@angular/router';
import { ErrorPlateComponent } from './error-plate.component';

const routes: Routes = [
    {
        path: '',
        component: ErrorPlateComponent,
    },
    {
        path: '404',
                component: ErrorPlateComponent,
                data: {
                    errorCode: 404,
                    errorMessage: 'URL not found.'
                }
    }
];

export const errorPlateRouting = RouterModule.forChild(routes);
