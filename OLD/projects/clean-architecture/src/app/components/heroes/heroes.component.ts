import { Component, OnInit } from '@angular/core';

import { Hero } from '../../entities/hero';
import { HeroMainService } from '../../services/hero-main.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroMainService,
  ){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes(heroes => this.heroes = heroes)
  }

}
