import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService }            from '../../../service/auth/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

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
                this.router.navigate(['/client/user']);
            },
            error => {
                this.loading = false;
                this.setErrorMessage(error);
            }
        );
    }

    private setErrorMessage(error) {
        this.errorMessage = `${error.status} error occurred.`;
        if (error.status == '401') {
            this.errorMessage += ' Bad credentials.';
        }
        if (error.status == '0') {
            this.errorMessage += ' Server is not running.';
        }
    }
}
