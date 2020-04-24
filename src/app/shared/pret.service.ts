import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pret } from '../shared/pret';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PretService {
  // Define API
  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch prets list
  getPrets(): Observable<Pret> {
    return this.http.get<Pret>(this.apiURL + '/prets')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch pret
  getPret(idpret): Observable<Pret> {
    return this.http.get<Pret>(this.apiURL + '/prets/' + idpret)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create pret
  createPret(pret): Observable<Pret> {
    return this.http.post<Pret>(this.apiURL + '/prets', pret, this.httpOptions)  
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update pret
  updatePret(idpret, pret): Observable<Pret> {
    return this.http.put<Pret>(this.apiURL + '/prets/' + idpret, pret, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete pret
  deletePret(idpret){
    return this.http.delete<Pret>(this.apiURL + '/prets/' + idpret, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
