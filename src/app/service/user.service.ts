import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//127.0.0.1:8080/server/user');
  }
}
