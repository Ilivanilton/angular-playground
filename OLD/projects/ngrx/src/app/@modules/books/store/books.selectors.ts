import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "../entities/books.model";



export const selectBooks =
createFeatureSelector<ReadonlyArray<Book>>('books');


export const selectColletionState =
createFeatureSelector<ReadonlyArray<string>>('collection');


export const selectBookColletion = createSelector(
  selectBooks,
  selectColletionState,
  (books, collection) => {
    return collection.map( id => {
      return books.find( book => book.id === id)
    })
  }
);
