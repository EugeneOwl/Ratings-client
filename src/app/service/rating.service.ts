import { Injectable }  from '@angular/core';
import { AuthHttp }    from 'angular2-jwt';
import { Observable }  from 'rxjs';
import { environment } from '../../environments/environment';
import { Rating }      from '../model/Rating';

@Injectable()
export class RatingService {
    public API = `${environment.serverUrl}ratings`;

    constructor(private authHttp: AuthHttp) {
    }

    save(rating: Rating): Observable<Rating> {

        return this.authHttp.post(this.API, rating).map(res => res.json());
    }

    getByRecipientId(recipientId: number | string): Observable<Rating[]> {
        return this.authHttp.get(this.API + '/recipient/' + recipientId).map(res => res.json());
    }
}
