import { NgModule }            from '@angular/core';
import { UserLayoutComponent } from './user-layout.component';
import { CommonModule }        from '@angular/common';
import { userRouting }         from './user-layout.routes';
import { UserLayoutGuard }     from './user-layout.guard';
import { UserToolbarModule }   from '../../sections/toolbars/user-toolbar/user-toolbar.module';

@NgModule({
    declarations: [
        UserLayoutComponent
    ],
    imports: [
        userRouting,
        CommonModule,
        UserToolbarModule
    ],
    exports: [UserLayoutComponent],
    providers: [UserLayoutGuard]
})
export class UserLayoutModule {
}
