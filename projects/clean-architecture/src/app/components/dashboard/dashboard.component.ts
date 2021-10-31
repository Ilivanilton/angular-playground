import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Hero } from '../../entities/hero';
import { HeroMainService } from '../../services/hero-main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit , OnDestroy{

  heroes: Hero[] = [];
  private _getFiveHeroes$: Subscription;

  constructor(
    private heroMainService: HeroMainService,
  ){}

  ngOnDestroy(): void {
    this._getFiveHeroes$.unsubscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    const fn = heroes => this.heroes = heroes.slice(1,5)
    this._getFiveHeroes$ = this.heroMainService.getHeroes(fn);
  }

}
