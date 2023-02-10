import { Component, OnInit } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cliente } from './clientes';
import { Study01Service } from "./study01.service";

@Component({
  selector: 'app-study01',
  templateUrl: './study01.component.html',
})
export class Study01Component implements OnInit {

  private cliente$ :Observable<Cliente[]> = this.study01Service.cliente$;

  vm$ = combineLatest([
    this.cliente$,
  ]).pipe(
    map(([clientes]) => ({clientes}))
  )

  constructor(
    private study01Service: Study01Service,
  ) { }

  ngOnInit(): void {
  }

}
