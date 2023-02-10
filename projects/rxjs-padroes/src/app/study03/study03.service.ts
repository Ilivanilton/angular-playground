import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class Study03Service {

  private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  private url = 'api/products'

  products$ = this.http.get<Product[]>(this.url,this.httpOptions).pipe(
    // tap(data => console.log(data)),
    catchError(this.handleError),
    );

  constructor(
    private http: HttpClient,
  ) { }

  private handleError(err: HttpErrorResponse): Observable<never>{
    let errorMessage: string;
    if(err.error instanceof ErrorEvent){
      errorMessage = `Um error ocorreu: ${err.error.message}`;
    }else{
      errorMessage = `Servidor retornou codigo ${err.status}: ${err.message}`;
    }
    console.warn(err);
    return throwError(errorMessage)
  }
}
