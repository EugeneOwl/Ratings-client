import { Component } from '@angular/core';

import { Chart }         from 'chart.js';
import { OnInit }        from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { UserService }   from '../../../service/user.service';

@Component({
    selector: 'app-task-graphic',
    templateUrl: './task-graphic.component.html',
    styleUrls: ['./task-graphic.component.css']
})
export class TaskGraphicComponent implements OnInit, AfterViewInit {

    chart = [];
    statistics = [];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.chart = new Chart('canvas', {
            type: 'horizontalBar',
            data: {
                labels: ['user1', 'user2', 'user3'],
                datasets: [
                    {
                        data: ['10', '0', '0'],
                        backgroundColor: '#3cba9f',
                        fill: true,
                        label: 'сложное задание'
                    },
                    {
                        data: ['0', '20', '0'],
                        backgroundColor: '#3cbaff',
                        fill: false,
                        label: 'простое задание'
                    },
                    {
                        data: ['0', '5', '3'],
                        backgroundColor: '#3cffff',
                        fill: false,
                        label: 'лёгкое задание'
                    },
                ]
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
}
