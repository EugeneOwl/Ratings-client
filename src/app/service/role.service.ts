import { Injectable }  from '@angular/core';
import { AuthHttp }    from 'angular2-jwt';
import { Observable }  from 'rxjs';
import { environment } from '../../environments/environment';
import { Role }        from '../model/Role';

@Injectable()
export class RoleService {
    public API = `${environment.serverUrl}roles`;

    constructor(private authHttp: AuthHttp) {
    }

    getAll(): Observable<Role[]> {

        return this.authHttp.get(this.API).map(res => res.json());
    }

    get(id: number | string) {

        return this.authHttp.get(`${this.API}/${id}`).map(res => res.json());
    }

    save(role: Role): Observable<Role> {
        if (! role.id) {

            return this.authHttp.post(this.API, role).map(res => res.json());
        }

        return this.authHttp.put(this.API, role).map(res => res.json());
    }

    remove(id: number | string) {

        return this.authHttp.delete(`${this.API}/${id}`).map(res => res.json());
    }
}
