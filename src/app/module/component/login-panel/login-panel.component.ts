import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../../auth/auth.service';
import { SecurityService }   from '../../../auth/security.service';

@Component({
    selector: 'app-login-panel',
    templateUrl: './login-panel.component.html',
    styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

    constructor(private authService: AuthService,
                private securityService: SecurityService) {
    }

    ngOnInit() {
    }

    logout(): void {
        this.authService.logout();
    }

    isLoginButtonEnabled(): boolean {
        return ! this.securityService.isLoggedIn();
    }

    isLogoutButtonEnabled(): boolean {
        return this.securityService.isLoggedIn();
    }

}
