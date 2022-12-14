import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Cliente } from '../clientes';

@Injectable({
  providedIn: 'root'
})
export class Study01Service {

  private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  private url = 'api/clientes' // ver in-mem-db.service.ts

  cliente$ = this.http.get<Cliente[]>(this.url,this.httpOptions).pipe(
    tap(data => console.log(data)),
    //catchError(this.handleError),
  )
  
  constructor(
    private http: HttpClient,
  ) { }
}
