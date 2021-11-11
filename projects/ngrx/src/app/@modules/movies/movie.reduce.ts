import { createAction, createReducer, on, props } from "@ngrx/store";
import { Movie } from "./movie.model";


export const movieAction = createAction(
  '[Movies Api] Movies Loaded Success',
  props<{ movies: Movie[] }>()
);

export const movieReduce = createReducer(
  [],
  on(movieAction, (state, { movies } ) => movies)
)
