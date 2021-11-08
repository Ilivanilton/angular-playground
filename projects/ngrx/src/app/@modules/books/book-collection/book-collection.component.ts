import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../entities/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html'
})
export class BookCollectionComponent implements OnInit {

  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
