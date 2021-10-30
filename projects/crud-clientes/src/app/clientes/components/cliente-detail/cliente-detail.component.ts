import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";

import { ClientesService } from '../../shared/clientes.service';
import { Cliente } from '../../shared/clientes.model';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.scss']
})
export class ClienteDetailComponent implements OnInit {

  cliente: Cliente;

  constructor(
    private clienteService: ClientesService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.getCliente();
  }

  getCliente() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.clienteService.getCliente(id)
      .subscribe( cliente => this.cliente = cliente);
  }

  goBack(){
    this.location.back();
  }

  goEdit(cliente: Cliente){
    let link = ['/clientes',cliente.id,'edit']
    this.router.navigate(link)
  }

  goDelete(cliente: Cliente){
    this.clienteService.delete(cliente)
      .subscribe(()=> this.goBack() )
  }

}
