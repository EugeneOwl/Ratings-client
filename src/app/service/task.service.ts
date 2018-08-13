import { Injectable }  from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthHttp }    from 'angular2-jwt';
import { Observable }  from 'rxjs';
import { Task }        from '../model/Task';

@Injectable()
export class TaskService {
    public API = `${environment.serverUrl}tasks`;

    constructor(private authHttp: AuthHttp) {
    }

    getAll(): Observable<any> {

        return this.authHttp.get(this.API).map(res => res.json());
    }

    get(id: string): Observable<any> {

        return this.authHttp.get(`${this.API}/${id}`).map(res => res.json());
    }

    save(task: Task): Observable<any> {

        return this.authHttp.post(this.API, task).map(res => res.json());
    }
}
