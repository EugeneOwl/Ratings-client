import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Location }          from '@angular/common';

@Component({
    selector: 'app-error-layout',
    templateUrl: './error-layout.component.html',
    styleUrls: ['./error-layout.component.css']
})
export class ErrorLayoutComponent implements OnInit {

    errorCode: number;
    errorMessage: string;

    constructor(private activatedRoute: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.errorCode = params.errorCode;
            this.errorMessage = params.errorMessage;
        });
    }

    goBack() {
        this.location.back();
    }
}
