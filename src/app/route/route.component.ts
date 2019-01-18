import {Component, OnInit} from '@angular/core';
import {RoutesService} from '../shared/services/routes.service';
import {Route} from '../shared/models/route';
import {ActivatedRoute, Router} from '@angular/router';
import {Review} from '../shared/models/review';
import {User} from '../shared/models/user';
import {Place} from '../shared/models/place';

@Component({
    selector: 'app-route',
    templateUrl: './route.component.html',
    styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
    route_id: number = null;
    reviews: Review [] = [];
    route: Route = null;
    star_number = 3;
    private sub: any;

    constructor(private _route_service: RoutesService, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.route_id = +params['id'];
            this.getRoute();
        });
    }

    getRoute() {
        this._route_service.getRoute(this.route_id).subscribe(
            result => {
                let places = [];
                result.places.forEach((place) => {
                    places.push(new Place(place.id, place.name, place.short_description,
                        place.description, place.image_url, place.valuation));
                });
                this.route = new Route(result.id, result.name, result.short_description,
                    result.description, result.image_url, result.valuation, null, places);
                for (const review of result.reviews) {
                    this.reviews.push(new Review(review.id, review.comment, review.valuation, new Date(review.created_at), review.user_id,
                        new User(review.user.id, review.user.name, review.user.email, review.user.avatar_url, '')));
                }
            },
            error => {
                console.log('error.', error);
            });
    }

    renderStar(index: number, stars: number) {
        return (index <= stars);
    }

}
