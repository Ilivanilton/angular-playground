import { Injectable } from '@angular/core';

import { Subscription } from 'rxjs';

import { GetAllHeroesUseCase } from '../use-cases/getAllHeroesUseCase/getAllHeroesUseCase';
import { GetAllHeroesController } from '../use-cases/getAllHeroesUseCase/getAllHeroesController';
import { GetHeroUseCase } from '../use-cases/getHeroUseCase/getHeroUseCase';
import { GetHeroController } from './../use-cases/getHeroUseCase/getHeroController';
import { HeroesRepository } from './../repository/implementation/heroes-repository';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroMainService {

  private repository: HeroesRepository;
  private getAllHeroesController: GetAllHeroesController;
  private getHeroController: GetHeroController;


  constructor(
    public messageService: MessageService,
  ){
    this.injectDependence();
  }


  private injectDependence(){
    this.repository = new HeroesRepository(this.messageService);
    this.getAllHeroesController =
      new GetAllHeroesController(
        new GetAllHeroesUseCase( this.repository )
      );
    this.getHeroController =
      new GetHeroController(
        new GetHeroUseCase( this.repository )
      );
  }


  getHeroes(callBack): Subscription{
    const heroes = this.getAllHeroesController.execute(callBack);
    return heroes;
  }


  getHero(id,callBack): Subscription{
    const hero = this.getHeroController.execute(id,callBack);
    return hero;
  }

}
