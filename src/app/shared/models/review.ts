import {User} from './user';

export class Review {
    private _id: number;
    private _comment: string;
    private _valuation: number;
    private _user_id: number;
    private _user: User;
    private _created_at: Date;


    constructor(id: number, comment: string, valuation: number, created_at: Date, user_id?: number, user: User = null) {
        this._id = id;
        this._comment = comment;
        this._valuation = valuation;
        this._user_id = user_id;
        this._created_at = created_at;
        this._user = user;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get comment(): string {
        return this._comment;
    }

    set comment(value: string) {
        this._comment = value;
    }

    get valuation(): number {
        return this._valuation;
    }

    set valuation(value: number) {
        this._valuation = value;
    }

    get user_id(): number {
        return this._user_id;
    }

    set user_id(value: number) {
        this._user_id = value;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }


    get created_at(): Date {
        return this._created_at;
    }

    set created_at(value: Date) {
        this._created_at = value;
    }
}
