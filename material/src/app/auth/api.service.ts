import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

// import { CommonResponse } from '../common/common-response';
import { environment } from '../../environments/environment';

// import { User, Spectrum } from '../db/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endPoint = environment.ServerUrl;
  loginStatus = new BehaviorSubject<boolean>(this.hasToken());


  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router ) {

  }
  /**
   *
   * @param formData as the login form data
   */
  login(formData: any) {
    return this.http.get(this.endPoint + 'users')
    .pipe(
      tap((resp: any) => {
        let userData = resp.find((row: any) =>  (row.email === formData.email && row.password === formData.password))
        if (userData) {
          this.cookieService.set('currentUser', `tmp-${new Date().getTime}`);
          this.loginStatus.next(true);
          return userData;
        } else {
          throw new Error('Invalid login details');
        }
      }),
      catchError(this.handleError)
    );
  }



  public getSpectrums() {
    return this.http.get(this.endPoint + 'spectrums');
}


  /**
   *
   * @param error error
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error)}`);
    }
    console.log(error);

    // return an observable with a user-facing error message
    return throwError(error);
  }

  logout() {
    this.loginStatus.next(false);

    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }

/**
*
* @returns {Observable<T>}
*/
 isLoggedIn(): Observable<boolean> {
  return this.loginStatus.asObservable();
 }
   /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken(): boolean {
    return this.cookieService.check('currentUser');
  }
}
