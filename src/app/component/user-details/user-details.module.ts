import { NgModule }              from '@angular/core';
import { UserDetailsComponent }  from './user-details.component';
import { MatButtonModule }         from '@angular/material';
import { MatInputModule }          from '@angular/material';
import { MatCardModule }           from '@angular/material';
import { MatDialogModule }         from '@angular/material';
import { RouterModule }            from '@angular/router';
import { ReactiveFormsModule }     from '@angular/forms';
import { CommonModule }            from '@angular/common';
import { NotificationComponent }   from '../notification/notification.component';
import { MatBadgeModule }          from '@angular/material';
import { RatingsDetailsComponent } from '../ratings-details/ratings-details.component';

@NgModule({
    declarations: [
        UserDetailsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,

        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatBadgeModule
    ],
    exports: [UserDetailsComponent],
    entryComponents: [
        NotificationComponent,
        RatingsDetailsComponent
    ],
    providers: []
})
export class UserDetailsModule {
}
