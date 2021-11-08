import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () => import('./@modules/counter/counter.module')
      .then(m => m.CounterModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./@modules/books/books.module')
      .then(m => m.BooksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
