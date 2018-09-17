import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Savior } from './savior';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class SaviorService {

  private saviorsUrl = 'api/saviors';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getSaviors (): Observable<Savior[]> {
    return this.http.get<Savior[]>(this.saviorsUrl)
      .pipe(
        tap(saviors => this.log('fetched characters')),
        catchError(this.handleError('getSaviors', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getSaviorNo404<Data>(id: number): Observable<Savior> {
    const url = `${this.saviorsUrl}/?id=${id}`;
    return this.http.get<Savior[]>(url)
      .pipe(
        map(saviors => saviors[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} savior id=${id}`);
        }),
        catchError(this.handleError<Savior>(`getSavior id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getSavior(id: number): Observable<Savior> {
    const url = `${this.saviorsUrl}/${id}`;
    return this.http.get<Savior>(url).pipe(
      tap(_ => this.log(`fetched savior id=${id}`)),
      catchError(this.handleError<Savior>(`getSavior id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchSaviors(term: string): Observable<Savior[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Savior[]>(`${this.saviorsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found saviors matching "${term}"`)),
      catchError(this.handleError<Savior[]>('searchSaviors', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addSavior (savior: Savior): Observable<Savior> {
    return this.http.post<Savior>(this.saviorsUrl, savior, httpOptions).pipe(
      tap((savior: Savior) => this.log(`added char w/ id=${savior.id}`)),
      catchError(this.handleError<Savior>('addSavior'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteSavior (savior: Savior | number): Observable<Savior> {
    const id = typeof savior === 'number' ? savior : savior.id;
    const url = `${this.saviorsUrl}/${id}`;

    return this.http.delete<Savior>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted char id=${id}`)),
      catchError(this.handleError<Savior>('deleteSavior'))
    );
  }

  /** PUT: update the hero on the server */
  updateSavior (savior: Savior): Observable<any> {
    return this.http.put(this.saviorsUrl, savior, httpOptions).pipe(
      tap(_ => this.log(`updated savior id=${savior.id}`)),
      catchError(this.handleError<any>('updateSavior'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a SaviorService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`SaviorService: ${message}`);
  }
}