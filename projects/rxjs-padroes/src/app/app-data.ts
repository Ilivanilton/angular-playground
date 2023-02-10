import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Cliente } from './study01/clientes';
import { ClienteData } from './study01/clientes-data';

@Injectable({
  providedIn: 'root'
})
export class AppData implements InMemoryDbService {

  createDb(): {clientes: Cliente[]} {
    const clientes = ClienteData.clientes;
    return {clientes};
  }

}
