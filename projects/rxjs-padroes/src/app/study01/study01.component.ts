import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes';

import { Study01Service } from "./study01.service";

@Component({
  selector: 'app-study01',
  templateUrl: './study01.component.html',
  styleUrls: ['./study01.component.scss']
})
export class Study01Component implements OnInit {

  cliente$ :Observable<Cliente[]> = this.study01Service.cliente$;
  
  constructor(
    private study01Service: Study01Service,
  ) { }

  ngOnInit(): void {
  }

}
