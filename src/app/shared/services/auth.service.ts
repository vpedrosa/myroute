import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _token = '';
    private _email: string;
    private _email$ = new Subject<string>();
    private _name: string;
    private _name$ = new Subject<string>();
    private _profile_image: string;
    private _profile_image$ = new Subject<string>();
    private _headers: HttpHeaders;
    private _protocol: string;
    private _server: string;
    private _api_url: string;
    private _api_route: string = this._protocol + this._server + this._api_url;
    private _api_route$ = new Subject<string>();


    constructor(private _router: Router,
                private _http_client: HttpClient) {
        this.protocol = environment.protocol;
        this.server = environment.server;
        this.api_url = environment.api_url;
        this._api_route = this.protocol + this.server + this.api_url;

        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('Authorization', '');

        const currentToken = JSON.parse(localStorage.getItem('token'));
        if (currentToken) {
            this._token = currentToken;
            this._email = JSON.parse(localStorage.getItem('email'));
            this._name = JSON.parse(localStorage.getItem('name'));
            this._profile_image = JSON.parse(localStorage.getItem('profile_image'));
        }
    }


    private resetUser() {
        this._token = null;
        this._email = null;
        this._name = null;
        this._profile_image = null;
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.removeItem('profile_image');
        localStorage.removeItem('abilities');
        localStorage.removeItem('account');
        localStorage.removeItem('impersonate_information');
    }

    login(data: any): Observable<boolean> {
        if (this.token) {
            this.resetUser();
        }
        return this.authenticate(this._api_route + 'login', data);
    }

    private authenticate(route: string, data: any): Observable<boolean> {
        return this._http_client.post(route, data)
            .pipe(
                map((response) => {
                    if (response['token']) {
                        const res = response['token'].split('.');
                        const payload = JSON.parse(window.atob(res[1]));

                        this.token = 'Bearer ' + response['token'];
                        this.email = payload['email'];
                        this.name = response['name'];
                        this.profile_image = response['profile_image'];
                        return true;
                    } else {
                        return false;
                    }
                }),
                catchError((error: any) => this.handleError(error))
            );
    }

    logout(redirect_route: string = '/'): void {
        this.resetUser();
        this.api_route = this.protocol + this.server + this.api_url;

        this._router.navigate([redirect_route]);
    }

    private handleError(err: HttpErrorResponse | any) {
        return throwError(err.error.error);
    }


    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get email$(): Subject<string> {
        return this._email$;
    }

    set email$(value: Subject<string>) {
        this._email$ = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get name$(): Subject<string> {
        return this._name$;
    }

    set name$(value: Subject<string>) {
        this._name$ = value;
    }

    get profile_image(): string {
        return this._profile_image;
    }

    set profile_image(value: string) {
        this._profile_image = value;
    }

    get profile_image$(): Subject<string> {
        return this._profile_image$;
    }

    set profile_image$(value: Subject<string>) {
        this._profile_image$ = value;
    }

    get headers(): HttpHeaders {
        return this._headers;
    }

    set headers(value: HttpHeaders) {
        this._headers = value;
    }

    get protocol(): string {
        return this._protocol;
    }

    set protocol(value: string) {
        this._protocol = value;
    }

    get server(): string {
        return this._server;
    }

    set server(value: string) {
        this._server = value;
    }

    get api_url(): string {
        return this._api_url;
    }

    set api_url(value: string) {
        this._api_url = value;
    }

    get api_route(): string {
        return this._api_route;
    }

    set api_route(value: string) {
        this._api_route = value;
    }

    get api_route$(): Subject<string> {
        return this._api_route$;
    }

    set api_route$(value: Subject<string>) {
        this._api_route$ = value;
    }
}
