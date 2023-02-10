import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Cliente } from './clientes';

@Injectable({
  providedIn: 'root'
})
export class Study01Service {

  private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  private url = 'api/clientes' // ver in-mem-db.service.ts

  cliente$ = this.http.get<Cliente[]>(this.url,this.httpOptions).pipe(
    tap(data => console.log(data)),
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
    return throwError(() => errorMessage)
  }

}
