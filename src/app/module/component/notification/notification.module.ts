import { NgModule }              from '@angular/core';
import { MatButtonModule }       from '@angular/material';
import { MatCardModule }         from '@angular/material';
import { NotificationComponent } from './notification.component';
import { ReactiveFormsModule }   from '@angular/forms';
import { RouterModule }          from '@angular/router';

@NgModule({
    declarations: [
        NotificationComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule,

        MatButtonModule,
        MatCardModule
    ],
    exports: [NotificationComponent],
    providers: []
})
export class NotificationModule {
}
