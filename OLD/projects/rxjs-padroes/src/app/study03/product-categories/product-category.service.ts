import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError, Observable } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';

import { ProductCategory } from './product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private productCategoriesUrl = 'api/productCategories';

  productCategories$ = this.http.get<ProductCategory[]>(this.productCategoriesUrl)
    .pipe(
      // tap(data => console.log('categories', JSON.stringify(data))),
      shareReplay(1),
      catchError(this.handleError)
    );

  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.warn(err);
    return throwError(errorMessage);
  }
}
