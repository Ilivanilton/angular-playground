import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  template: `
  <ul>
  <li [routerLink]="['/']" routerLinkActive="router-link-active" ><button>/{{ count$ | async}}</button></li>
    <li [routerLink]="['/counter']" routerLinkActive="router-link-active" ><button>/counter</button></li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'ngrx';
  count$: Observable<number>;

  constructor(
    private store: Store<{count: number}>
  ){
    this.count$ = this.store.select('count')
      .pipe(
        tap( e => console.log(e) )
      )
  }

}
