import {Injectable} from '@angular/core';
import {Place} from '../models/place';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class PlaceService {

    private fake_places = [
        new Place('1', 'Mirador de san Nicolás', 'Un mirador precioso', 'https://bit.ly/2PJcGtb', new User(), []),
        new Place('2', 'Sierra Nevada', 'Un paraje increíble', 'https://bit.ly/2LiU5U9', new User(), []),
        new Place('3', 'Lanjarón', 'La puerta de la Alpujarra', 'https://bit.ly/2UO8cFf', new User(), []),
        new Place('4', 'Pampaneira', 'Un pueblo precioso', 'https://bit.ly/2GlQbuR', new User(), []),
    ];

    constructor() {
    }

    listPlaces() {
        return this.fake_places;
    }

    searchPlace(search: string) {
        return this.fake_places.filter((item: Place) => {
            return item.name.includes(search);
        });
    }
}
