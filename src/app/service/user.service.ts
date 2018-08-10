import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs';
import { User }        from '../model/User';
import { environment } from '../../environments/environment';
import { AuthHttp }    from 'angular2-jwt';

@Injectable()
export class UserService {
    public API = `${environment.serverUrl}users`;

    constructor(private authHttp: AuthHttp) {
    }

    getAll(): Observable<any> {
        return this.authHttp.get(this.API).map(res => res.json());
    }

    get(id: string): Observable<any> {

        return this.authHttp.get(this.API + '/' + id).map(res => res.json());
    }

    save(user: User): Observable<any> {
        return this.authHttp.post(this.API, user).map(res => res.json());
    }
}
