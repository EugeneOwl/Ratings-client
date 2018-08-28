import { Component }     from '@angular/core';
import { OnInit }        from '@angular/core';
import { AfterViewInit } from '@angular/core';

import { Chart }       from 'chart.js';
import { UserService } from '../../../../service/user.service';
import { User }        from '../../../../model/User';
import { Task }        from '../../../../model/Task';
import { TaskService } from '../../../../service/task.service';
import { forkJoin }    from 'rxjs';

@Component({
    selector: 'app-task-graphic',
    templateUrl: './task-graphic.component.html',
    styleUrls: ['./task-graphic.component.css']
})
export class TaskGraphicComponent implements OnInit, AfterViewInit {

    chart: Chart = {};
    chartLabels: Array<string> = [];
    chartDatasets: Array<Dataset> = [];

    constructor(private userService: UserService,
                private taskService: TaskService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        forkJoin(
            this.userService.getAll(),
            this.taskService.getAll()
        ).subscribe(data => {
            this.initializeChartData(data[0], data[1]);
            this.createChart();
        });
    }

    private createChart() {
        this.chart = new Chart('canvas', {
            type: 'horizontalBar',
            data: {
                labels: this.chartLabels,
                datasets: this.chartDatasets
            },
            options: {
                title: {
                    display: true,
                    text: 'User tasks statistics'
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
    }

    private initializeChartData(users: User[], tasks: Task[]): void {
        this.chartLabels = users.map(user => user.username);

        for (const task of tasks) {
            const dataset = {
                data: [],
                backgroundColor: this.getRandomColor(),
                fill: false,
                label: task.label
            };

            for (const user of users) {
                const taskOwnedByUser = user.tasks.filter(t => t.id == task.id)[0];
                if (taskOwnedByUser) {
                    dataset.data.push(taskOwnedByUser.evaluation);
                } else {
                    dataset.data.push('0');
                }
            }

            this.chartDatasets.push(dataset);
        }
    }

    private getRandomColor(): string {

        return `rgb(
                    ${Math.floor(Math.random() * 250)},
                    ${Math.floor(Math.random() * 250)},
                    ${Math.floor(Math.random() * 250)}
        )`;
    }
}

export interface Dataset {
    data: string[];
    backgroundColor: string;
    fill: boolean;
    label: string;
}