import { Movie } from "./movie.model";


export interface MovieState {
  movies: ReadonlyArray<Movie>;
}
