import { Component, OnInit }    from '@angular/core';
import { Input }                from '@angular/core';
import { Inject }               from '@angular/core';
import { MAT_DIALOG_DATA }      from '@angular/material';
import { MatDialogRef }         from '@angular/material';
import { UserDetailsComponent } from '../../sections/user/user-details/user-details.component';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
    @Input()
    message: string;

    constructor(public dialogRef: MatDialogRef<UserDetailsComponent>,
                @Inject(MAT_DIALOG_DATA) public data) {
    }

    ngOnInit() {
        this.message = this.data.message;
    }

    goBack() {
        this.dialogRef.close();
    }
}
