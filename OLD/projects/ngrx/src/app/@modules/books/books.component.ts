import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { GoogleBooksService } from './books.service';
import { addBook, removeBook, retrievedBookList } from './store/books.actions';
import { selectBooks, selectBookColletion } from './store/books.selectors';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {

  booksLoad$ = this.booksService
    .getBooks()
    .pipe(
        tap(
          (books) => this.store.dispatch(retrievedBookList({ books }))
        )
    );

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookColletion)


  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }


  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }


  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) { }


  ngOnInit() {}

}
