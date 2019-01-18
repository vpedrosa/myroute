import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, distinctUntilChanged, map} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private _api_route = null;

    constructor(private _authentication_service: AuthService,
                private _http_client: HttpClient) {
        this._api_route = this._authentication_service.api_route;

        this._authentication_service.api_route$.pipe(
            distinctUntilChanged()
        ).subscribe(value => {
            this._api_route = value;
        });
    }


    get(url: string, query?: string, update_token: boolean = true): Observable<any> {
        console.log('queriying ' + this.api_route + url);
        return this._http_client.get(this.api_route + url, {
                headers: new HttpHeaders().set('Authorization', this._authentication_service.token),
                observe: 'response'
            }
        ).pipe(
            map((response: HttpResponse<any>) => {
                if (response.headers && response.headers.get('Authorization') && update_token) {
                    this._authentication_service.token = response.headers.get('Authorization');
                }

                return response.body;
            })
        );
    }

    post(url: string, data: any, update_token: boolean = true): Observable<any> {
        return this._http_client.post(this._api_route + url, data, {
            headers: new HttpHeaders().set('Authorization', this._authentication_service.token),
            observe: 'response'
        }).pipe(
            map((response: HttpResponse<any>) => {
                if (response.headers.get('Authorization') && update_token) {
                    this._authentication_service.token = response.headers.get('Authorization');
                }
                return response.body;
            }),
            catchError((error: any) => this.handleError(error))
        );
    }

    patch(url: string, data: any, update_token: boolean = true): Observable<any> {
        return this._http_client.patch(this._api_route + url, data, {
            headers: new HttpHeaders().set('Authorization', this._authentication_service.token),
            observe: 'response'
        }).pipe(
            map((response: HttpResponse<any>) => {
                if (response.headers.get('Authorization') && update_token) {
                    this._authentication_service.token = response.headers.get('Authorization');
                }
                return response.body;
            }),
            catchError((error: any) => this.handleError(error))
        );
    }

    delete(url: string, data: any = null, update_token: boolean = true): Observable<any> {
        return this._http_client.request('delete', this._api_route + url, {
            body: data,
            headers: new HttpHeaders().set('Authorization', this._authentication_service.token),
            observe: 'response'
        }).pipe(
            map((response: HttpResponse<any>) => {
                if (response.headers.get('Authorization') && update_token) {
                    this._authentication_service.token = response.headers.get('Authorization');
                }
                return response.body;
            }),
            catchError((error: any) => this.handleError(error))
        );
    }

    private handleError(err: HttpErrorResponse | any) {
        if (err.error && err.error.message) {
            if (err.error.message === 'Bad Request token_expired'
                || err.error.message === 'Unauthorized Token has expired and can no longer be refreshed'
                || err.error.message === 'Token has expired and can no longer be refreshed'
                || err.error.message === 'The token has been blacklisted'
                || err.error.message === 'Unauthorized Token Signature could not be verified'
                || err.error.message === 'Unauthorized The token has been blacklisted') {
                this._authentication_service.logout();
            } else {
                console.error(err.error.message);
            }
            return throwError(err.error.message);
        } else {
            return throwError(err.error);
        }
    }


    get api_route(): any {
        return this._api_route;
    }

    set api_route(value: any) {
        this._api_route = value;
    }
}
