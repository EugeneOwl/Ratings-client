import { NgModule }                from '@angular/core';
import { MatButtonModule }         from '@angular/material';
import { MatInputModule }          from '@angular/material';
import { TaskEditComponent }       from './task-edit.component';
import { ReactiveFormsModule }     from '@angular/forms';
import { RouterModule }            from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule }          from '@angular/material';
import { FormsModule }             from '@angular/forms';

@NgModule({
    declarations: [
        TaskEditComponent
    ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        MatButtonModule,
        MatInputModule,
        MatRadioModule
    ],
    exports: [TaskEditComponent],
    providers: []
})
export class TaskEditModule {
}
