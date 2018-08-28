import { NgModule }                from '@angular/core';
import { TaskGraphicComponent }    from './task-graphic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserModule }           from '@angular/platform-browser';

@NgModule({
    declarations: [
        TaskGraphicComponent
    ],
    imports: [
        RouterModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule
    ],
    exports: [TaskGraphicComponent],
    providers: []
})
export class TaskGraphicModule {
}
