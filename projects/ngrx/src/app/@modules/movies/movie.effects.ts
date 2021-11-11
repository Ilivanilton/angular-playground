
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { MoviesService } from "./movies.service";
import { movieAction } from "./movie.reduce";
import { Movie } from './movie.model';

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect( () =>
    this.actions$.pipe(
      ofType('[Movies Page] Load Movies'),
      mergeMap( () =>
        this.moviesService.getAll().pipe(
          map((movies:Movie[]) => movieAction({movies})),
          catchError( () => EMPTY)
        ) // this.moviesService
      ) // mergeMap
    ) // this.actions$
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService,
  ) { }

}
