import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';

import { IndexComponent } from './components/index/index.component';


const routes: Routes = [
{ path:'', component: IndexComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'clean/detail/:id', component: HeroDetailComponent },
{ path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
