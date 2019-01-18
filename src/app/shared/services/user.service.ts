import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private _api_service: ApiService) {
    }

    register(value: any) {
        return this._api_service.post('register', value);
    }
}
