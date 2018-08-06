import { NgModule }                from '@angular/core';
import { MatButtonModule }         from '@angular/material';
import { NotificationComponent }   from './notification.component';
import { ReactiveFormsModule }     from '@angular/forms';
import { RouterModule }            from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule }           from '@angular/material';

@NgModule({
    declarations: [
        NotificationComponent
    ],
    imports: [
        BrowserAnimationsModule,
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
