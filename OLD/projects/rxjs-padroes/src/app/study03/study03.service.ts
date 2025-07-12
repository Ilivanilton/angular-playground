import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { combineLatest, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

import { Product } from './product';
import { ProductCategoryService } from './product-categories/product-category.service';

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

  productsWithCategory$ = combineLatest([
    this.products$,
    this.productCategoryService.productCategories$
  ]).pipe(
    map(([products, categories]) =>
      products.map(product => ({
        ...product,
        price: product.price ? product.price * 1.5 : 0,
        category: categories.find(c => product.categoryId === c.id)?.name,
        searchKey: [product.productName]
      } as Product))
    ),
    shareReplay(1)
  );

  constructor(
    private http: HttpClient,
    private productCategoryService: ProductCategoryService,
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
