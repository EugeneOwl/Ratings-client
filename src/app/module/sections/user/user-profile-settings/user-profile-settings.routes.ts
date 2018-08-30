import { Routes }                       from '@angular/router';
import { RouterModule }                 from '@angular/router';
import { UserProfileSettingsComponent } from './user-profile-settings.component';

const routes: Routes = [
    {
        path: '',
        component: UserProfileSettingsComponent
    }
];

export const userProfileSettingsRouting = RouterModule.forChild(routes);
