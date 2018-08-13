import { Injectable }  from '@angular/core';
import { AuthHttp }    from 'angular2-jwt';
import { Observable }  from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RoleService {
    public API = `${environment.serverUrl}roles`;

    constructor(private authHttp: AuthHttp) {
    }

    getAll(): Observable<any> {

        return this.authHttp.get(this.API).map(res => res.json());
    }

    get(id: string) {

        return this.authHttp.get(`${this.API}/${id}`).map(res => res.json());
    }

    save(role: any): Observable<any> {
        if (! role.id) {

            return this.authHttp.put(this.API, role).map(res => res.json());
        }

        return this.authHttp.post(this.API, role).map(res => res.json());
    }

    remove(id: string) {

        return this.authHttp.delete(`${this.API}/${id}`).map(res => res.json());
    }
}
