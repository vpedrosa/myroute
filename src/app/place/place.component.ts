import { Component, OnInit } from '@angular/core';
import {Place} from '../shared/models/place';
import {RoutesService} from '../shared/services/routes.service';
import {ActivatedRoute} from '@angular/router';
import {PlaceService} from '../shared/services/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
    place: Place = null;
    place_id: number = null;
    private sub: any;

    comments = [
        {img_url: 'https://place-hold.it/50x50', text: 'El mirador de San Nicolás es bonito', name: 'Antonio Martín', date: '18/03/2018'}
    ];


    constructor(private _place_service: PlaceService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.place_id = +params['id'];
            this.getRoute();
        });
    }

    getRoute() {
        this._place_service.getPlace(this.place_id).subscribe(
            result => {
                this.place = new Place(result.id, result.name, result.short_description, result.description, result.image_url);
            },
            error => {
                console.log('error.', error);
            });
    }

}
