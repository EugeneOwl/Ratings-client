import { Component, OnInit }    from '@angular/core';
import { Input }                from '@angular/core';
import { Inject }               from '@angular/core';
import { MAT_DIALOG_DATA }      from '@angular/material';
import { MatDialogRef }         from '@angular/material';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
    @Input()
    message: string;

    constructor(public dialogRef: MatDialogRef<UserDetailsComponent>,
                @Inject(MAT_DIALOG_DATA) public parentData) {
    }

    ngOnInit() {
        this.message = this.parentData.message;
    }

    goBack() {
        this.dialogRef.close();
    }
}
