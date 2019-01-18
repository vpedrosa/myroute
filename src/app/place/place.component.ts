import {Component, OnInit, ViewChild} from '@angular/core';
import {Place} from '../shared/models/place';
import {RoutesService} from '../shared/services/routes.service';
import {ActivatedRoute} from '@angular/router';
import {PlaceService} from '../shared/services/place.service';
import {User} from '../shared/models/user';
import {Review} from '../shared/models/review';


@Component({
    selector: 'app-place',
    templateUrl: './place.component.html',
    styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
    place: Place = null;
    reviews: Review [] = [];
    place_id: number = null;
    title = 'AGM Map';
    lat = 37.193725199999996;
    lng = -3.6356013802246094;
    loaded = false;
    private sub: any;


    constructor(private _place_service: PlaceService, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.place_id = +params['id'];
            this.getPlace();
        });
    }

    getPlace() {
        this._place_service.getPlace(this.place_id).subscribe(
            result => {
                this.place = new Place(result.id, result.name, result.short_description,
                    result.description, result.image_url, result.valuation);
                for (const review of result.reviews) {
                    this.reviews.push(new Review(review.id, review.comment, review.valuation, new Date(review.created_at), review.user_id,
                        new User(review.user.id, review.user.name, review.user.email, review.user.avatar_url, '')));
                }
                this.lat = parseFloat(result.latitude);
                this.lng = parseFloat(result.longitude);
                this.loaded = true;
            },
            error => {
                console.log('error.', error);
            });
    }

    renderStar(index: number, stars: number) {
        return (index <= stars);
    }

}
