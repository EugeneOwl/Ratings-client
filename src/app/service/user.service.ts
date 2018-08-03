import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User }       from '../model/User';

@Injectable()
export class UserService {
    public API='//127.0.0.1:8080/server/users';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(this.API);
    }

    get(id: string): Observable<any> {

        return this.http.get(this.API + '/' + id);
    }

    save(user: User): Observable<any> {
        return this.http.post(this.API, user);
    }
}
