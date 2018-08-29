import { Injectable } from '@angular/core';

@Injectable()
export class SecurityService {
    public adminRoles = ['ROLE_ADMIN'];
    public userRoles = this.adminRoles.concat(['ROLE_USER']);

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
