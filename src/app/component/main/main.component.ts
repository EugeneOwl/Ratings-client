import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../auth/auth.service';
import { SecurityService }   from '../../auth/security.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    constructor(private authService: AuthService, private securityService: SecurityService) {
    }

    ngOnInit() {
    }

    logout(): void {
        this.authService.logout();
    }

    isAdminPageButtonEnabled(): boolean {
        return this.securityService.hasAccessToAdminContent();
    }

    isUserPageButtonEnabled(): boolean {
        return this.securityService.hasAccessToUserContent();
    }

    isLoginButtonEnabled(): boolean {
        return ! this.securityService.isLoggedIn();
    }

    isLogoutButtonEnabled(): boolean {
        return this.securityService.isLoggedIn();
    }
}
