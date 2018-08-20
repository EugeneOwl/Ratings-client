import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
    selector: 'app-error-plate',
    templateUrl: './error-plate.component.html',
    styleUrls: ['./error-plate.component.css']
})
export class ErrorPlateComponent implements OnInit {

    errorCode: number;
    errorMessage: string;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.errorCode = params.errorCode;
            this.errorMessage = params.errorMessage;
        });
    }

}
