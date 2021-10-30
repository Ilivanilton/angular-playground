import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteMainComponent } from './components/cliente-main/cliente-main.component';
import { ClienteDetailComponent } from './components/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';

  const routes: Routes = [
    {
      path: '',
      children:[
        {path: '', component: ClienteMainComponent},
        {path: 'create', component: ClienteCreateComponent},
        {path: ':id', component: ClienteDetailComponent},
        {path: ':id/edit', component: ClienteEditComponent}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
