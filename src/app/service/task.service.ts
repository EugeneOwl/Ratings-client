import { Injectable }  from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthHttp }    from 'angular2-jwt';
import { Observable }  from 'rxjs';
import { Task }        from '../model/Task';

@Injectable()
export class TaskService {
    public API = `${environment.serverUrl}tasks`;
    public PAGE_SIZE = 4;

    constructor(private authHttp: AuthHttp) {
    }

    getAll(): Observable<Task[]> {

        return this.authHttp.get(this.API).map(res => res.json());
    }

    get(id: number | string): Observable<Task> {

        return this.authHttp.get(`${this.API}/${id}`).map(res => res.json());
    }

    getPage(pageNumber: number,
            sortByColumn: string,
            filterPattern: string): Observable<Task[]> {

        return this.authHttp.get(
            `${this.API}/page?page=${pageNumber}&size=${this.PAGE_SIZE}&sort=${sortByColumn}&filterPattern=${filterPattern}`
        ).map(res => res.json());
    }

    getPageByUserId(pageNumber: number,
                    sortByColumn: string,
                    filterPattern: string,
                    userId: number): Observable<Task[]> {

        return this.authHttp.get(
            `${this.API}/page/by/user?page=${pageNumber}&size=${this.PAGE_SIZE}&sort=${sortByColumn}&filterPattern=${filterPattern}&userId=${userId}`
        ).map(res => res.json());
    }

    save(task: Task): Observable<Task> {
        if (! task.id) {

            return this.authHttp.post(this.API, task).map(res => res.json());
        }

        return this.authHttp.put(this.API, task).map(res => res.json());
    }

    remove(id: number | string): Observable<Task> {

        return this.authHttp.delete(`${this.API}/${id}`).map(res => res.json());
    }
}
