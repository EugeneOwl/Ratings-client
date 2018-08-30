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
        this.activatedRoute.queryParams.subscribe(queryParams => {
            this.errorCode = queryParams.errorCode;
            this.errorMessage = queryParams.errorMessage;
        });

        this.activatedRoute.data.subscribe(params => {
            if (params.errorCode) {
                this.errorCode = params.errorCode;
            }
            if (params.errorMessage) {
                this.errorMessage = params.errorMessage;
            }
        });
    }

}
