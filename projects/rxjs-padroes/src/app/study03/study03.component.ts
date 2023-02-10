import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Study03Service } from './study03.service';

@Component({
  selector: 'app-study03',
  templateUrl: './study03.component.html',
})
export class Study03Component implements OnInit {

  private products$ = this.study03Service.products$

  vm$ = combineLatest([
    this.products$,
  ]).pipe(
    map(([products]) => ({products}))
  )

  constructor(
    private study03Service: Study03Service,
  ) { }

  ngOnInit(): void {
  }

}
