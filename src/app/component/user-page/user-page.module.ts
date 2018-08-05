import { NgModule }          from '@angular/core';
import { UserPageComponent } from './user-page.component';
import { UserListModule }    from '../user-list/user-list.module';
import { UserToolbarModule } from '../user-toolbar/user-toolbar.module';

@NgModule({
    declarations: [
        UserPageComponent
    ],
    imports: [
        UserToolbarModule,
        UserListModule
    ],
    exports: [UserPageComponent],
    providers: []
})
export class UserPageModule {
}
