import { Component, OnInit }      from '@angular/core';
import { AuthService }            from '../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    model: any = {};
    loading = false;
    errorMessage: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {
    }

    ngOnInit() {

    }

    login() {
        this.loading = true;
        this.errorMessage = null;
        this.authService.login(this.model.username, this.model.password)
        .flatMap(data => {
            return this.authService.getMe();
        })
        .subscribe(
            data => {
                localStorage.setItem('user', JSON.stringify(data));
                this.router.navigate(['/client/main']);
            },
            error => {
                this.loading = false;
                this.errorMessage = `${error.status} error occurred. `;
                if (error.status == '401') {
                    this.errorMessage += 'Bad credentials.';
                }
                if (error.status == '0') {
                    this.errorMessage += 'Server is not running.';
                }
            }
        );
    }

}
