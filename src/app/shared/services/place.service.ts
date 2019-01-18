import {Injectable} from '@angular/core';
import {Place} from '../models/place';
import {User} from '../models/user';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class PlaceService {

    constructor(private _api_service: ApiService) {
    }


    getPlaces() {
        return this._api_service.get('places');
    }

    getPlace(id: number) {
        return this._api_service.get('places/' + id);
    }

}
