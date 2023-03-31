import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

/**
 *  Service transversal de traitement des erreurs.
 *
 */
@Injectable({ providedIn: 'root' })
export class ErrorHandler {
  constructor() {}

  public handleHttpError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    return throwError({ code: error.status, message: error.statusText });
  }
}