export class User {
    private _id: number;
    private _name: string;
    private _email: string;
    private _avatar_url: string;
    private _password: string;


    constructor(id: number, name: string, email: string, avatar_url: string, password: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._avatar_url = avatar_url;
        this._password = password;
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

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get avatar_url(): string {
        return this._avatar_url;
    }

    set avatar_url(value: string) {
        this._avatar_url = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}
