import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, catchError, map } from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';

// FIXME: change route to RIGHT way
const SERVER_URL = 'http://localhost:8080/api/coffeShop';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(SERVER_URL)
    .pipe(
        tap(_ => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
