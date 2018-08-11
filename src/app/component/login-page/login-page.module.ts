import { NgModule }           from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { RouterModule }    from '@angular/router';
import { FormsModule }     from '@angular/forms';
import { CommonModule }    from '@angular/common';
import { LoginPageGuard }  from './login-page.guard';
import { MatCardModule }   from '@angular/material';
import { MatInputModule }  from '@angular/material';
import { MatBadgeModule }  from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule }   from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,

        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatBadgeModule,
        MatSliderModule
    ],
    exports: [LoginPageComponent],
    providers: [LoginPageGuard]
})
export class LoginPageModule {
}
