import {User} from './user';

export class Place {
    private _id: string;
    private _name: string;
    private _description: string;
    private _img: string;
    private _creator: User;
    private _comments: Comment[];

    constructor(id: string, name: string, description: string, img: string, creator: User, comments: Comment[]) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._img = img;
        this._creator = creator;
        this._comments = comments;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get img(): string {
        return this._img;
    }

    set img(value: string) {
        this._img = value;
    }

    get creator(): User {
        return this._creator;
    }

    set creator(value: User) {
        this._creator = value;
    }

    get comments(): Comment[] {
        return this._comments;
    }

    set comments(value: Comment[]) {
        this._comments = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
}
