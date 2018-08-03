import { NgModule }            from '@angular/core';
import { UserEditComponent }   from './user-edit.component';
import { MatButtonModule }     from '@angular/material';
import { RouterModule }        from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        UserEditComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule,

        MatButtonModule
    ],
    exports: [UserEditComponent],
    providers: []
})
export class UserEditModule {
}
