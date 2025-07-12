import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from '../../shared/clientes.model';
import { ClientesService } from '../../shared/clientes.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.scss']
})
export class ClienteEditComponent implements OnInit {

  cliente: Cliente;

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCliente()
  }

  getCliente(){
    let id = +this.route.snapshot.paramMap.get('id');
    this.clienteService.getCliente(id)
      .subscribe( cliente => this.cliente = cliente);
  }

  save(){
    this.clienteService.update(this.cliente)
      .subscribe( () => this.goToIndex());
  }

  goToIndex(){
    this.router.navigateByUrl('/clientes')
  }

}
