import {Injectable} from '@angular/core';
import {Route} from '../models/route';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class RoutesService {

    constructor(private _api_service: ApiService) {
    }

    getRoutes() {
        return this._api_service.get('routes');
    }

    getRoute(id: number) {
        return this._api_service.get('routes/' + id);
    }

}
