import { Component, OnInit }    from '@angular/core';
import { Inject }               from '@angular/core';
import { User }                 from '../../../../model/User';
import { RatingService }        from '../../../../service/rating.service';
import { Rating }               from '../../../../model/Rating';
import { MAT_DIALOG_DATA }      from '@angular/material';
import { MatDialogRef }         from '@angular/material';
import { UserDetailsComponent } from '../../user/user-details/user-details.component';

@Component({
    selector: 'app-ratings-details',
    templateUrl: './ratings-details.component.html',
    styleUrls: ['./ratings-details.component.css']
})
export class RatingsDetailsComponent implements OnInit {
    recipient: User = {
        id: 0,
        username: '',
        mobileNumber: '',
        roles: [],
        tasks: []
    };
    ratings: Rating[] = [];

    constructor(private ratingService: RatingService,
                private dialogRef: MatDialogRef<UserDetailsComponent>,
                @Inject(MAT_DIALOG_DATA) public parentData) {
    }

    ngOnInit() {
        if (this.parentData.recipient) {
            this.recipient = this.parentData.recipient;
            this.ratingService.getByRecipientId(this.recipient.id).subscribe(
                (success: Rating[]) => {
                    this.ratings = success;
                },
                error => {
                    console.log(error);
                    this.goBack();
                }
            );
        }
    }

    goBack() {
        this.dialogRef.close();
    }
}
