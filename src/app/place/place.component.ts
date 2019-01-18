import {Component, OnInit} from '@angular/core';
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
    header = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.9143558299256!2d';
    middle = '!3d';
    next = '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcbf8007fb1d%3A0x1e79fa11b52eb83e!2sCalle+Gran+V%C3%ADa+de+Col%C3%B3n%2C+23%2C+18001+Granada!5e0!3m2!1ses!2ses!4v1541756954417';
    map_address = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.9143558299256!2d-3.60122248445914!3d37.17850625401195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcbf8007fb1d%3A0x1e79fa11b52eb83e!2sCalle+Gran+V%C3%ADa+de+Col%C3%B3n%2C+23%2C+18001+Granada!5e0!3m2!1ses!2ses!4v1541756954417';
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
                this.map_address = this.header + result.longitude + this.middle + result.latitude + this.next;
            },
            error => {
                console.log('error.', error);
            });
    }

    renderStar(index: number, stars: number) {
        return (index <= stars);
    }

}
