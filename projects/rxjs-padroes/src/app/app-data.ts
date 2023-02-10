import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Cliente } from './study01/clientes';
import { ClienteData } from './study01/clientes-data';
import { Product } from './study03/product';
import { ProductData } from './study03/product-data';

@Injectable({
  providedIn: 'root'
})
export class AppData implements InMemoryDbService {

  createDb(): {clients: Cliente[], products: Product[]} {
    const clients = ClienteData.clientes;
    const products = ProductData.products;
    return {clients, products};
  }

}
