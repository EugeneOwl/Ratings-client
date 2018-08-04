import { Component, OnInit }    from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
    childDialogComponentClassName = UserDetailsComponent;

    constructor() {
    }

    ngOnInit() {
    }

}
