import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {ErrorHandler} from './shared/error-handler';
import {Commitment} from './model/commitment.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, protected errorHandler: ErrorHandler) { }

  rootURL = '/api';

  getCommitments(): Observable<any> {
    return this.http
      .get(this.rootURL + '/commitments', {
        observe: 'response'
      })
      .pipe(
        // Permet de vérifier qu'on a code 200 + aucune exception n'a été levée
        catchError(this.errorHandler.handleHttpError),
        // Extraire le body
        map(response => response.body)
        // Instancier correctement les documents à partir des "objets" fournis par Angular
        // map((liste: any) => liste.map(element => new Commitment().deserialize(element)))
      );
  }

  getCommitment(id: number): Observable<Commitment> {
    return this.http.get<Commitment>(`${this.rootURL}/commitment/${id}`).pipe(
      catchError(this.errorHandler.handleHttpError),
      map(data => new Commitment().deserialize(data))
    );
  }

  addCommitment(commitment: any, id: number) {
    commitment.id = id;
    return this.http.post(this.rootURL + '/commitment', commitment);
  }

}
