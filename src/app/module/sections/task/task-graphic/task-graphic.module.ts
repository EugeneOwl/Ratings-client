import { NgModule }             from '@angular/core';
import { TaskGraphicComponent } from './task-graphic.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterModule }         from '@angular/router';
import { HttpClientModule }     from '@angular/common/http';
// import { BrowserModule }           from '@angular/platform-browser';
import { taskGraphicRouting }   from './task-graphic.routes';
import { CommonModule }         from '@angular/common';

@NgModule({
    declarations: [
        TaskGraphicComponent
    ],
    imports: [
        taskGraphicRouting,
        // RouterModule,
        CommonModule,
        // BrowserAnimationsModule,
        // BrowserModule,
        HttpClientModule
    ],
    exports: [TaskGraphicComponent],
    providers: []
})
export class TaskGraphicModule {
}
