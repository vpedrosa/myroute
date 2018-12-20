import {Place} from './place';

export class Route {
    private _places: Place[];
    private _comments: Comment[];
    private _name: string;
    private _img: string;
    private _last_visited: number;
    private _points: number;
    private _short_description: string;
    private _long_description: string;

    constructor(places: Place[], comments: Comment[], name: string, img: string, last_visited: number, points: number, short_description: string, long_description: string) {
        this._places = places;
        this._comments = comments;
        this._name = name;
        this._img = img;
        this._last_visited = last_visited;
        this._points = points;
        this._short_description = short_description;
        this._long_description = long_description;
    }

    get comments(): Comment[] {
        return this._comments;
    }

    set comments(value: Comment[]) {
        this._comments = value;
    }

    get places(): Place[] {
        return this._places;
    }

    set places(value: Place[]) {
        this._places = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get img(): string {
        return this._img;
    }

    set img(value: string) {
        this._img = value;
    }

    get last_visited(): number {
        return this._last_visited;
    }

    set last_visited(value: number) {
        this._last_visited = value;
    }

    get points(): number {
        return this._points;
    }

    set points(value: number) {
        this._points = value;
    }

    get long_description(): string {
        return this._long_description;
    }

    set long_description(value: string) {
        this._long_description = value;
    }

    get short_description(): string {
        return this._short_description;
    }

    set short_description(value: string) {
        this._short_description = value;
    }
}
