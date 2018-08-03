import { NgModule }           from '@angular/core';
import { UserPageComponent }  from './user-page.component';
import { GoHomeButtonModule } from '../go-home-button/go-home-button.module';
import { UserListModule }     from '../user-list/user-list.module';

@NgModule({
    declarations: [
        UserPageComponent
    ],
    imports: [
        GoHomeButtonModule,
        UserListModule
    ],
    exports: [UserPageComponent],
    providers: []
})
export class UserPageModule {
}
