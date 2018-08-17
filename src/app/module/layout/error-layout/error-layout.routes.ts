import { Routes }               from '@angular/router';
import { ErrorLayoutComponent } from './error-layout.component';

const routes: Routes = [
    {
        path: 'client/error',
        component: ErrorLayoutComponent
    }
];

export const errorRoutes = routes;
