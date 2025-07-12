import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteMainComponent } from './components/cliente-main/cliente-main.component';
import { ClienteDetailComponent } from './components/cliente-detail/cliente-detail.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';


@NgModule({
  declarations: [
    ClienteMainComponent,
    ClienteDetailComponent,
    ClienteEditComponent,
    ClienteCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
