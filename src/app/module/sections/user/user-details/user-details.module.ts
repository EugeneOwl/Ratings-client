import { NgModule }                from '@angular/core';
import { UserDetailsComponent }    from './user-details.component';
import { MatButtonModule }         from '@angular/material';
import { MatInputModule }          from '@angular/material';
import { MatCardModule }           from '@angular/material';
import { MatDialogModule }         from '@angular/material';
import { MatBadgeModule }          from '@angular/material';
import { MatSliderModule }         from '@angular/material';
import { MatIconModule }           from '@angular/material';
import { RouterModule }            from '@angular/router';
import { ReactiveFormsModule }     from '@angular/forms';
import { CommonModule }            from '@angular/common';
import { NotificationComponent }   from '../../../component/notification/notification.component';
import { RatingsDetailsComponent } from '../../rating/ratings-details/ratings-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskDetailsComponent }    from '../../task/task-details/task-details.component';

@NgModule({
    declarations: [
        UserDetailsComponent
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,

        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatBadgeModule,
        MatSliderModule
    ],
    exports: [UserDetailsComponent],
    entryComponents: [
        NotificationComponent,
        RatingsDetailsComponent,
        TaskDetailsComponent
    ],
    providers: []
})
export class UserDetailsModule {
}