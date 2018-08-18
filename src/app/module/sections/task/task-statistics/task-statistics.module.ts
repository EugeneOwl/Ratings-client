import { NgModule }                from '@angular/core';
import { TaskStatisticsComponent } from './task-statistics.component';
import { MatButtonModule }         from '@angular/material';
import { MatCardModule }           from '@angular/material';
import { MatIconModule }           from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';

@NgModule({
    declarations: [
        TaskStatisticsComponent
    ],
    imports: [
        RouterModule,
        BrowserAnimationsModule,

        MatIconModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [TaskStatisticsComponent],
    providers: []
})
export class TaskStatisticsModule {
}
