import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService }            from '../../../module/auth/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;
    errorMessage: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.errorMessage = null;
        this.authService.login(this.model.username, this.model.password);
        this.authService.getMe()
        .subscribe(
            data => {
                localStorage.setItem('user', JSON.stringify(data));
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.loading = false;
                this.errorMessage = error.json().message;
            }
        );
    }

}
