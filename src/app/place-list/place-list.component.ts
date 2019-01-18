import {Component, OnInit} from '@angular/core';
import {Place} from '../shared/models/place';
import {PlaceService} from '../shared/services/place.service';

@Component({
    selector: 'app-place-list',
    templateUrl: './place-list.component.html',
    styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {


    public places: Place[] = [];

    constructor(private _route_service: PlaceService) {
    }

    ngOnInit() {
        this.getRoutes();
    }

    getRoutes() {
        this._route_service.getPlaces().subscribe(
            result => {
                for (const place of result.data) {
                    this.places.push(new Place(place.id, place.name, place.short_description, place.description, place.image_url, place.valuation));
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
