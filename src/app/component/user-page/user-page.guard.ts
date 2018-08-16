import { Injectable }                                                       from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable }                                                       from 'rxjs/Observable';
import { SecurityService }                                                  from '../../auth/security.service';

@Injectable()
export class UserPageGuard implements CanActivate {

    constructor(private securityService: SecurityService, private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (! this.securityService.isLoggedIn()) {
            this.router.navigate(['/client/login']);

            return false;
        }

        if (! this.securityService.hasAccessToUserContent()) {
            this.router.navigate(['/client/error']);

            return false;
        }

        return true;
    }
}
