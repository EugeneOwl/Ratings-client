import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs';
import { User }        from '../model/User';
import { environment } from '../../environments/environment';
import { AuthHttp }    from 'angular2-jwt';
import { UserUpdate }  from '../model/UserUpdate';

@Injectable()
export class UserService {
    public API = `${environment.serverUrl}users`;
    public PAGE_SIZE = 5;

    constructor(private authHttp: AuthHttp) {
    }

    getAll(): Observable<User[]> {

        return this.authHttp.get(this.API).map(res => res.json());
    }

    get(id: number | string): Observable<User> {

        return this.authHttp.get(`${this.API}/${id}`).map(res => res.json());
    }

    getPage(pageNumber: number, sortByColumn: string, filterPattern: string): Observable<User[]> {
        return this.authHttp.get(
            `${this.API}/page?page=${pageNumber}&size=${this.PAGE_SIZE}&sort=${sortByColumn}&filterPattern=${filterPattern}`
        ).map(res => res.json());
    }

    save(user: UserUpdate): Observable<UserUpdate> {

        return this.authHttp.put(this.API, user).map(res => res.json());
    }
}
