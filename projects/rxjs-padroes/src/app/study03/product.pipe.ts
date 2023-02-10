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
