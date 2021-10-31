import { IUseCase } from "../IUseCase";

export class GetAllHeroesController {

  constructor(
    private useCase: IUseCase,
  ){}

  public execute(responseCallBack){
    const dataDTO = this.useCase.handle();
    return dataDTO.data.subscribe(responseCallBack);
  }

}
