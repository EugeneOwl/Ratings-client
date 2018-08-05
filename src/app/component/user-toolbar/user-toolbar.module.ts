import { NgModule }              from '@angular/core';
import { UserToolbarComponent }  from './user-toolbar.component';
import { MatSidenavModule }      from '@angular/material';
import { MatToolbarModule }      from '@angular/material';
import { MatButtonModule }       from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { LayoutModule }          from '@angular/cdk/layout';
import { CommonModule }          from '@angular/common';
import { GoHomeButtonModule }    from '../go-home-button/go-home-button.module';

@NgModule({
    declarations: [
        UserToolbarComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,

        GoHomeButtonModule,

        MatButtonToggleModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule
    ],
    exports: [UserToolbarComponent],
    providers: []
})
export class UserToolbarModule {
}
