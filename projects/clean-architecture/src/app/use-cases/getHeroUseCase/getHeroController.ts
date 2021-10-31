import { IUseCase } from './../IUseCase';

export class GetHeroController {

  constructor(
    private getHeroUseCase: IUseCase,
  ){}

  execute(heroId, responseCallBack){
    const observable = this.getHeroUseCase.handle(heroId);
    return observable.subscribe(responseCallBack);
  }

}
