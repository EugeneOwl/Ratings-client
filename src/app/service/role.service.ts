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
		if (!role.id) {
			console.log('adding ' + role.id);
			result = this.http.put(this.API, role);
		} else {
			console.log('editing ' + role.id);
			result = this.http.post(this.API, role);
		}

		return result;
	}

	remove(id: string) {

		console.log('going to delete ' + id);
		return this.http.delete(this.API + '/' + id);
	}
}
