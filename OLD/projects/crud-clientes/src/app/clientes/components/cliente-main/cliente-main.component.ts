import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../shared/clientes.model';
import { ClientesService } from '../../shared/clientes.service';
@Component({
  selector: 'app-cliente-main',
  templateUrl: './cliente-main.component.html',
  styleUrls: ['./cliente-main.component.scss']
})
export class ClienteMainComponent implements OnInit {

  clientes: Cliente[];

  constructor(
    private clienteService: ClientesService,
  ){ }

  ngOnInit() {
    this.getClientes()
  }

  getClientes(){
    this.clienteService.getClientes()
      .subscribe(clientes => this.clientes = clientes);
  }

}
