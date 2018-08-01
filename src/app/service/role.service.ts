import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RoleService {
  public API = '//127.0.0.1:8080/server/roles';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API);
  }

  get(id: string) {
    return this.http.get(this.API + '/' + id);
  }

  save(role: any): Observable<any> {
    let result: Observable<object>;
    if (role['href']) {
      result = this.http.put(role.href, role);
    } else {
      console.log('SAVING ROLE!');
      result = this.http.post(this.API, role);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
