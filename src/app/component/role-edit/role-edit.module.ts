import { NgModule } from '@angular/core';

import { CommonModule }            from '@angular/common';
import { MatButtonModule }         from '@angular/material';
import { RoleEditComponent }       from './role-edit.component';
import { FormsModule }             from '@angular/forms';
import { RouterModule }            from '@angular/router';
import { ReactiveFormsModule }     from '@angular/forms';
import { MatFormFieldModule }      from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule }          from '@angular/material';
import { BrowserModule }           from '@angular/platform-browser';
import { MatSelectModule }         from '@angular/material';

@NgModule({
    declarations: [
        RoleEditComponent
    ],
    imports: [
        //CommonModule,
          MatButtonModule,
          FormsModule,
        RouterModule,
          ReactiveFormsModule,
        //MatFormFieldModule,
          MatInputModule,
          BrowserAnimationsModule,
          BrowserModule,
          MatSelectModule
    ],
    exports: [RoleEditComponent],
    providers: []
})
export class RoleEditModule {
}
