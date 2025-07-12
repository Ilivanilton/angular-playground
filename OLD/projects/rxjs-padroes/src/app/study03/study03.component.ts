import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, combineLatest, EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProductCategoryService } from './product-categories/product-category.service';
import { Study03Service } from './study03.service';

@Component({
  selector: 'app-study03',
  templateUrl: './study03.component.html',
})
export class Study03Component implements OnInit {

  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  products$ = combineLatest([
    this.study03Service.productsWithCategory$,
    this.categorySelectedAction$,
  ]).pipe(
      map(([products, selectedCategoryId]) =>
        products.filter(product =>
          selectedCategoryId ? product.categoryId === selectedCategoryId : true
        )),
      catchError(this.handleError),
    );

  categories$ = this.productCategoryService.productCategories$
    .pipe(
      catchError(this.handleError),
    );

  vm$ = combineLatest([
    this.products$,
    this.categories$,
  ]).pipe(
    map(([products,categories]) => ({products,categories}))
  )

  constructor(
    private study03Service: Study03Service,
    private productCategoryService: ProductCategoryService,
  ) { }

  ngOnInit(): void {}

  onSelected(categoryId: string): void {
    this.categorySelectedSubject.next(+categoryId);
  }

  private handleError(err: HttpErrorResponse): Observable<never>{
    console.warn(err);
    return EMPTY
  }

}
