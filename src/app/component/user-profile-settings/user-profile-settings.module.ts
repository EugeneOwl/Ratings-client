import { NgModule }                     from '@angular/core';
import { UserProfileSettingsComponent } from './user-profile-settings.component';
import { UserListModule }               from '../user-list/user-list.module';
import { UserToolbarModule }   from '../user-toolbar/user-toolbar.module';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule }      from '@angular/material';
import { MatCardModule }       from '@angular/material';
import { MatButtonModule }     from '@angular/material';
import { MatCheckboxModule }   from '@angular/material';
import { MatIconModule }       from '@angular/material';

@NgModule({
    declarations: [
        UserProfileSettingsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        UserToolbarModule,
        UserListModule,

        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatCardModule
    ],
    exports: [UserProfileSettingsComponent],
    providers: []
})
export class UserProfileSettingsModule {
}
