import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, catchError, map } from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';

// TODO: change route to RIGHT way
const SERVER_URL = 'http://localhost:8080/api/coffeShop/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient) { }

  getUser(userName, userPassword): Observable<any> {
    return this.http.get(`${SERVER_URL + 'users'}/${userName}`)
    .pipe(
        tap(_ => console.log('fetched user')),
        catchError(this.handleError('getUser', []))
    );
  }


  registerUser(user): Observable<any> {
    const registerUrl = SERVER_URL + 'users';
    return this.http.post(registerUrl, user)
    .pipe(
      tap(_ => console.log('fetched user')),
      catchError(this.handleError('registerUser', []))
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
