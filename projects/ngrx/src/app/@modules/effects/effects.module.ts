import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsRoutingModule } from './effects-routing.module';
import { MoviesPageComponent } from './movies-page/movies-page.component';


@NgModule({
  declarations: [
    MoviesPageComponent
  ],
  imports: [
    CommonModule,
    EffectsRoutingModule,
  ]
})
export class ExempleEffectsModule { }
