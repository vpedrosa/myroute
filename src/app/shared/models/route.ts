import {Place} from './place';
import {User} from './user';

export class Route {
    private _id: number;
    private _name: string;
    private _short_description: string;
    private _description: string;
    private _image_url: string;
    private _created_by: User;
    private _places: Place[];
    private _valuation: number;

    constructor(id: number,
                name: string,
                short_description: string, description: string, image_url: string,
                valuation: number, created_by: User = null, places: Place[] = []) {
        this._id = id;
        this._name = name;
        this._short_description = short_description;
        this._description = description;
        this._image_url = image_url;
        this._created_by = created_by;
        this._places = places;
        this._valuation = valuation;
    }


    get valuation(): number {
        return this._valuation;
    }

    set valuation(value: number) {
        this._valuation = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get short_description(): string {
        return this._short_description;
    }

    set short_description(value: string) {
        this._short_description = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get image_url(): string {
        return this._image_url;
    }

    set image_url(value: string) {
        this._image_url = value;
    }

    get created_by(): User {
        return this._created_by;
    }

    set created_by(value: User) {
        this._created_by = value;
    }

    get places(): Place[] {
        return this._places;
    }

    set places(value: Place[]) {
        this._places = value;
    }
}
