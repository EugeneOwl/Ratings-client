import { NgModule }            from '@angular/core';
import { UserLayoutComponent } from './user-layout.component';
import { CommonModule }        from '@angular/common';
import { userRoutes }          from './user-layout.routes';
import { RouterModule }        from '@angular/router';
import { UserLayoutGuard }     from './user-layout.guard';
import { UserToolbarModule }   from '../../sections/toolbars/user-toolbar/user-toolbar.module';

@NgModule({
    declarations: [
        UserLayoutComponent
    ],
    imports: [
        RouterModule.forChild(userRoutes),
        CommonModule,
        UserToolbarModule
    ],
    exports: [UserLayoutComponent],
    providers: [UserLayoutGuard]
})
export class UserLayoutModule {
}
