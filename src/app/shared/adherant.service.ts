import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Adherant } from '../shared/adherant';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AdherantService {
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

  // HttpClient API get() method => Fetch adherants list
  getAdherants(): Observable<Adherant> {
    return this.http.get<Adherant>(this.apiURL + '/adherants')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch adherant
  getAdherant(idAdherant): Observable<Adherant> {
    return this.http.get<Adherant>(this.apiURL + '/adherants/' + idAdherant)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create adherant
  createAdherant(adherant): Observable<Adherant> {
    return this.http.post<Adherant>(this.apiURL + '/adherants', adherant, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update adherant
  updateAdherant(idAdherant, adherant): Observable<Adherant> {
    return this.http.put<Adherant>(this.apiURL + '/adherants/' + idAdherant, adherant, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete adherant
  deleteAdherant(idAdherant){
    return this.http.delete<Adherant>(this.apiURL + '/adherants/' + idAdherant, this.httpOptions)
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
