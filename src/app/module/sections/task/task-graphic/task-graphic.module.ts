import { NgModule }             from '@angular/core';
import { TaskGraphicComponent } from './task-graphic.component';
import { taskGraphicRouting }   from './task-graphic.routes';
import { CommonModule }         from '@angular/common';

@NgModule({
    declarations: [
        TaskGraphicComponent
    ],
    imports: [
        taskGraphicRouting,
        CommonModule
    ],
    exports: [TaskGraphicComponent],
    providers: []
})
export class TaskGraphicModule {
}
