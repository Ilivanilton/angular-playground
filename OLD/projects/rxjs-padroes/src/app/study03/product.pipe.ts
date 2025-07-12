import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productDesc'
})
export class ProductPipe implements PipeTransform {

  transform(p: Product, ...args: unknown[]): string {
    return `${p.productName} (${p.categoryId})`;
  }

}

@Pipe({
  name: 'productAndCategory'
})
export class ProductCategoryPipe implements PipeTransform {

  transform(p: Product, ...args: unknown[]): string {
    return `${p.productName} (${p.category})`;
  }

}
