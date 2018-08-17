import { Component, OnInit } from '@angular/core';
import { RatingService }     from '../../../../service/rating.service';
import { Rating }            from '../../../../model/Rating';
import { ActivatedRoute }    from '@angular/router';
import { Router }            from '@angular/router';

@Component({
    selector: 'app-ratings-details',
    templateUrl: './ratings-details.component.html',
    styleUrls: ['./ratings-details.component.css']
})
export class RatingsDetailsComponent implements OnInit {
    userId: number;
    ratings: Rating[] = [];

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private ratingService: RatingService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.userId = params['id'];
        });

        if (this.userId) {
            this.ratingService.getByRecipientId(this.userId).subscribe(
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
        this.router.navigate([`client/user/users/${this.userId}`]);
    }
}
