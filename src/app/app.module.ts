import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './component/user-list/user-list.component';
import { RoutingModule } from './module/routing/routing.module';
import { MainComponent } from './component/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
