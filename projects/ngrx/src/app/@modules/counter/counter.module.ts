import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';


@NgModule({
  declarations: [
    MyCounterComponent,
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature('count', counterReducer)
  ]
})
export class CounterModule { }
