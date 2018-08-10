import { Injectable } from '@angular/core';

@Injectable()
export class SecurityService {
    private userRoles = ['User'];
    private adminRoles = ['Admin'];

    constructor() {
    }

    isLoggedIn(): boolean {

        return ! ! localStorage.getItem('token') && ! ! localStorage.getItem('user');
    }

    hasAccessToUserContent(): boolean {

        return this.loggedInAndHasOneOfRoles(this.userRoles);
    }

    hasAccessToAdminContent(): boolean {

        return this.loggedInAndHasOneOfRoles(this.adminRoles);
    }

    private loggedInAndHasOneOfRoles(neededRoles: Array<string>): boolean {

        return ! ! localStorage.getItem('token')
            && ! ! localStorage.getItem('user')
            && JSON.parse(localStorage.getItem('user')).role.map(role => role.label)
                .filter(role => neededRoles.includes(role)).length !== 0;
    }
}
