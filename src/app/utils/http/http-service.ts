
/**

 * Provides the http `CRUD ` operations with the `base URL` already in place.
 * The consumer only `concatenates` the URL of choice as appropriately dictated by the `http method` of choice
 */

import {HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Injectable } from '@angular/core';
import { HTTPBase } from './http-base';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HttpService<T> {

  private constructor(private http: HttpClient) {

  }

  private baseHttpUrl(url: string): string {
    return HTTPBase.getBaseURL(url);
  }

  /**
   * `not used`
   */
  private getHeaders(): HttpHeaders {
    return new HttpHeaders()
      // .set('Content-Type', 'application/json');this.updateAddressOnlyInfo(theRegistration);this.updateAddressOnlyInfo(theRegistration);
  }

  /**
   *
   * @param url : a `URL` for posting
   * @param value the `object/instance` of a class. This `object` is what is posted or sent
   * @returns `http response` that has the http response object.
   */
  postRequest(url: string, value: any): Observable<HttpResponse<T>> {
    return this.http.post<T>(this.baseHttpUrl(url), value, { observe: 'response' }).pipe(
      tap(data => console.log(`All:  ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  /**
   *
   * @param url : a `URL` for getting/retrieving
   * @returns `http response` that has the http response object.
   */
  getRequest(url: string): Observable<HttpResponse<T>> {
    return this.http.get<T>(this.baseHttpUrl(url), { observe: 'response' }).pipe(
      tap(data => console.log(`All:  ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  /**
   *
   * @param url : a `URL` for putting/updating
   * @param value the `object/instance` of a class. This `object` is what is put/updated
   * @returns `http response` that has the http response object.
   */
  putRequest(url: string, value: any): Observable<HttpResponse<T>> {
    return this.http.put<T>(this.baseHttpUrl(url), value, { observe: 'response' }).pipe(
      tap(data => console.log(`All:  ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  /**
   *
   * @param url : a `URL` for deleteing
   * @returns `http response` that has the http response object.
   */
  deleteRequest(url: string): Observable<HttpResponse<T>> {
    return this.http.delete<T>(this.baseHttpUrl(url), { observe: 'response' }).pipe(
      tap(data => console.log(`All:  ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An erro occurred: ${err.error.message} `;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message} `;
    }
    console.log(`the error message:  ${errorMessage} `);
    return throwError(errorMessage);
  }

}
