import { createAction, createReducer, on, props } from "@ngrx/store";
import { Movie } from "./movie.model";


export const movieAction = createAction(
  '[Movies Api] Movies Loaded Success',
  props<{ movies: Movie[] }>()
);

export const moviesLoadedErrorAction = createAction(
  '[Movies API] Movies Loaded Error'
);

export const movieReduce = createReducer(
  [],
  on(movieAction, (state, { movies } ) => movies),
  on(moviesLoadedErrorAction, state => {
    debugger
    return state
  })
)
