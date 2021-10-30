import { Cliente } from './../../shared/clientes.model';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ClientesService } from '../../shared/clientes.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  constructor(
    private clienteService: ClientesService,
    private location: Location) { }

  ngOnInit() {
  }

  add(name: string): void{
    name = name.trim()
    if (!name) { return; }
    this.clienteService.addCliente( {name} as Cliente)
      .subscribe( _ => this.goBack() );
  }

  goBack(){
    this.location.back();
  }

}
