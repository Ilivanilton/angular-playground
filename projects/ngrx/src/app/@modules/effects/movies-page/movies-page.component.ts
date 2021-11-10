import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-page',
  template: `
    <li *ngFor="let movie of movies">
      {{ movie.name}}
    </li>
  `
})
export class MoviesPageComponent implements OnInit {

  movies: Movie[];

  constructor(
    private movieService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.movieService.getAll()
    .subscribe(
      (movies: Movie[]) => this.movies = movies
    );
  }

}
