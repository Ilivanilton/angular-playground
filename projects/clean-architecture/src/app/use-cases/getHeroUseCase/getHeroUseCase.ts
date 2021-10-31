import { IRepository } from "../../repository/IRepository";
import { IUseCase } from "../IUseCase";

export class GetHeroUseCase implements IUseCase {

  constructor(
    private heroRepository: IRepository,
  ){}

  handle(id: number): any {
    const retorno = this.heroRepository.getHero(id);
    return retorno;
  }
}
