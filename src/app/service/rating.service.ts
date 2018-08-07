import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RatingService {
    public API = '//127.0.0.1:8080/server/ratings';

    constructor(private http: HttpClient) {
    }

    save(rating: any): Observable<any> {

        return this.http.put(this.API, rating);
    }

    getByRecipientId(recipientId: number) {
        return this.http.get(this.API + '/recipient/' + recipientId);
    }
}
