import { NgModule }            from '@angular/core';
import { MatButtonModule }     from '@angular/material';
import { MatInputModule }      from '@angular/material';
import { MatCardModule }       from '@angular/material';
import { RoleEditComponent }   from './role-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { CommonModule }        from '@angular/common';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        RoleEditComponent
    ],
    imports: [
        // BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,

        MatCardModule,
        MatButtonModule,
        MatInputModule
    ],
    exports: [RoleEditComponent],
    providers: []
})
export class RoleEditModule {
}
