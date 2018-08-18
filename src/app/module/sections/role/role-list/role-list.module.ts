import { NgModule }                from '@angular/core';
import { RoleListComponent }       from './role-list.component';
import { RouterModule }            from '@angular/router';
import { MatButtonModule }         from '@angular/material';
import { MatTableModule }          from '@angular/material';
import { MatInputModule }          from '@angular/material';
import { MatButtonToggleModule }   from '@angular/material';
import { MatFormFieldModule }      from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule }     from '@angular/forms';

@NgModule({
    declarations: [
        RoleListComponent
    ],
    imports: [
        RouterModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,

        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTableModule,
        MatButtonModule
    ],
    exports: [RoleListComponent],
    providers: []
})
export class RoleListModule {
}
