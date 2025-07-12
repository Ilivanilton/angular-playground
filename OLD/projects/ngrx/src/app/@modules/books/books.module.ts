import { collectionReducer } from './store/collection.reducer';
import { booksReducer } from './store/books.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { GoogleBooksService } from './books.service';
import { BookCollectionComponent } from './book-collection/book-collection.component';


@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('books', booksReducer),
    StoreModule.forFeature('collection', collectionReducer)
  ],
  providers: [
    GoogleBooksService
  ]
})
export class BooksModule { }
