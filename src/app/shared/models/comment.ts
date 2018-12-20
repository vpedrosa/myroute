import {User} from './user';

export class Comment {
    private _user: User;
    private _date: Date;
    private _points: number;
    private _text: string;
    private _img: string;

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get points(): number {
        return this._points;
    }

    set points(value: number) {
        this._points = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    get img(): string {
        return this._img;
    }

    set img(value: string) {
        this._img = value;
    }
}
