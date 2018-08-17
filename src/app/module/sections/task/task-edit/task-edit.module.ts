import { NgModule }                from '@angular/core';
import { MatButtonModule }         from '@angular/material';
import { MatInputModule }          from '@angular/material';
import { MatRadioModule }          from '@angular/material';
import { MatCardModule }           from '@angular/material';
import { TaskEditComponent }       from './task-edit.component';
import { ReactiveFormsModule }     from '@angular/forms';
import { FormsModule }             from '@angular/forms';
import { RouterModule }            from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        TaskEditComponent
    ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatRadioModule
    ],
    exports: [TaskEditComponent],
    providers: []
})
export class TaskEditModule {
}
