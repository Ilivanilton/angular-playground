import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './@modules/effects/movie.model';

@Injectable({
  providedIn: 'root'
})
export class InMemDbService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let movies: Movie[] = [
      {name: 'Windstorm' },
      {name: 'Bombasto' },
      {name: 'Magneta' },
      {name: 'Tornado' }
    ];


    return {movies};
  }

}
