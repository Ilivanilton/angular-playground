import { Book } from "../entities/books.model";


export interface BookState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}
