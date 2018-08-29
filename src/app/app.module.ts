import { NgModule }     from '@angular/core';
import { ErrorHandler } from '@angular/core';

import { AppComponent }            from './app.component';
import { UserService }             from './service/user.service';
import { RoleService }             from './service/role.service';
import { RatingService }           from './service/rating.service';
import { AuthModule }              from './service/auth/auth.module';
import { HttpModule }              from '@angular/http';
import { TaskService }             from './service/task.service';
import { appRouting }              from './app.routes';
import { AppErrorHandler }         from './service/errorHandling/app-error-handler';
import { PathLocationStrategy }    from '@angular/common';
import { LocationStrategy }        from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        appRouting,
        HttpModule,
        BrowserAnimationsModule,
        AuthModule
    ],
    providers: [
        UserService,
        RoleService,
        RatingService,
        TaskService,
        {provide: ErrorHandler, useClass: AppErrorHandler},
        Location,
        {provide: LocationStrategy, useClass: PathLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
