import { NgModule }                from '@angular/core';
import { MatButtonModule }         from '@angular/material';
import { RoleEditComponent }       from './role-edit.component';
import { ReactiveFormsModule }     from '@angular/forms';
import { RouterModule }            from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        RoleEditComponent
    ],
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterModule,

        MatButtonModule
    ],
    exports: [RoleEditComponent],
    providers: []
})
export class RoleEditModule {
}
