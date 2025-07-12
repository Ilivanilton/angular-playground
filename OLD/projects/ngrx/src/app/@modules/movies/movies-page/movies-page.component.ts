import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Movie } from '../movie.model';


@Component({
  selector: 'app-movies-page',
  template: `
    <li *ngFor="let movie of movies$ | async">
      {{ movie.name}}
    </li>
  `
})
export class MoviesPageComponent implements OnInit {

  movies$: Observable<Movie[]> = this.store.select(
    state =>state.movies
  );

  constructor(
    private store: Store<{ movies: Movie[]}>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Movies Page] Load Movies'});
  }

}
