import { Injectable }                                                       from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable }                                                       from 'rxjs/Observable';
import { SecurityService }                                                  from '../../auth/security.service';

@Injectable()
export class AdminPageGuard implements CanActivate {

    constructor(private securityService: SecurityService, private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (! this.securityService.hasAccessToAdminContent()) {
            this.router.navigate(['/client/main']);

            return false;
        }

        return true;
    }
}
