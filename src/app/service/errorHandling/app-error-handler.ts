import { ErrorHandler } from '@angular/core';
import { Router }       from '@angular/router';
import { Injectable }   from '@angular/core';
import { Injector }     from '@angular/core';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

    private router: Router;

    constructor(private injector: Injector) {
        super();

    }

    handleError(error: any): void {
        this.router = this.injector.get(Router);

        console.log('Error handler catches error.');
        console.error(error);

        this.router.navigate(
            ['client/error'],
            {
                queryParams: {
                    errorCode: error.status,
                    errorMessage: error._body
                }
            });
    }
}