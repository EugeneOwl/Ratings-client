import { NgModule }                from '@angular/core';
import { UserEditComponent }       from './user-edit.component';
import { MatButtonModule }         from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule }           from '@angular/platform-browser';
import { RouterModule }            from '@angular/router';
import { FormsModule }             from '@angular/forms';
import { ReactiveFormsModule }     from '@angular/forms';

@NgModule({
    declarations: [
        UserEditComponent
    ],
    imports: [
        MatButtonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule,
    ],
    exports: [UserEditComponent],
    providers: []
})
export class UserEditModule {
}
