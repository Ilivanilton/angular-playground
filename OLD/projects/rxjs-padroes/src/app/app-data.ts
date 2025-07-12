import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Cliente } from './study01/clientes';
import { ClienteData } from './study01/clientes-data';
import { Product } from './study03/product';
import { ProductCategory } from './study03/product-categories/product-category';
import { ProductCategoryData } from './study03/product-categories/product-category-data';
import { ProductData } from './study03/product-data';

@Injectable({
  providedIn: 'root'
})
export class AppData implements InMemoryDbService {

  createDb(): {
    clients: Cliente[],
    products: Product[],
    productCategories: ProductCategory[],
  } {
    const clients = ClienteData.clientes;
    const products = ProductData.products;
    const productCategories = ProductCategoryData.categories;
    return {clients, products, productCategories};
  }

}
