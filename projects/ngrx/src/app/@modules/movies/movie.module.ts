import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movie.effects';
import { StoreModule } from '@ngrx/store';
import { movieReduce } from './movie.reduce';


@NgModule({
  declarations: [
    MoviesPageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', movieReduce),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class MovieModule { }
