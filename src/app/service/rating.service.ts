import { Injectable }  from '@angular/core';
import { AuthHttp }    from 'angular2-jwt';
import { Observable }  from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RatingService {
    public API = `${environment.serverUrl}ratings`;

    constructor(private authHttp: AuthHttp) {
    }

    save(rating: any): Observable<any> {

        return this.authHttp.put(this.API, rating).map(res => res.json());
    }

    getByRecipientId(recipientId: number) {
        return this.authHttp.get(this.API + '/recipient/' + recipientId).map(res => res.json());
    }
}
