import { IRepository } from "../../repository/IRepository";
import { IOutputDTO } from "./IOutputDTO";

export class GetAllHeroesUseCase {

  constructor(
    private heroRepository: IRepository,
  ){}

  handle(): IOutputDTO{
    const returno = this.heroRepository.getAll();
    return new IOutputDTO(returno);
  }

}
