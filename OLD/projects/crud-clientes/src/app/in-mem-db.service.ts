import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemDbService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let clientes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];

    let cabrones = [
      { id: 1, name: 'cabraoo' },
    ];

    return {clientes,cabrones};
  }

}
