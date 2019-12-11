
/**
 * @author Daniel Comboni
 * Provides the http `CRUD ` operations with the `base URL` already in place.
 * The consumer only `concatenates` the URL of choice as appropriately dictated by the `http method` of choice
 */

import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HTTPBase } from '../http/http-base';


@Injectable({
    providedIn: 'root'
})

export class HttpService<T> {

    private constructor(private http: HttpClient) {

    }

    private baseHttpUrl(url:string): string {
        return HTTPBase.getBaseURL(url);
    }

    /**
     * `not used`
     */
    private getHeaders(): HttpHeaders {
        return new HttpHeaders()
            .set("Content-Type", "application/json");
    }

    /**
     * 
     * @param url {String} : a `URL` for posting
     * @param value {Object} the `object/instance` of a class. This `object` is what is posted or sent
     * @returns `http response` that has the http response object. 
     */
    postRequest(url: string, value: Object): Observable<HttpResponse<T>> {
        return this.http.post<T>(this.baseHttpUrl(url), value, { observe: 'response' });
    }

    /**
     * 
     * @param url {String} : a `URL` for getting/retrieving
     * @returns `http response` that has the http response object. 
     */
    getRequest(url: string): Observable<HttpResponse<T>> {
        return this.http.get<T>(this.baseHttpUrl(url), { observe: 'response' });
    }

    /**
     * 
     * @param url {String} : a `URL` for putting/updating
     * @param value {Object} the `object/instance` of a class. This `object` is what is put/updated
     * @returns `http response` that has the http response object. 
     */
    putRequest(url: string, value: Object): Observable<HttpResponse<T>> {
        return this.http.put<T>(this.baseHttpUrl(url), value, { observe: 'response' });
    }


    /**
     * 
     * @param url {String} : a `URL` for deleteing
     * @returns `http response` that has the http response object. 
     */
    deleteRequest(url: string): Observable<HttpResponse<T>> {
        return this.http.delete<T>(this.baseHttpUrl(url), { observe: 'response' });
    }
}