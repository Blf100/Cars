import { ICategoriesRepository } from "../repositories/IcategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}


class CreateCategoryService {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
 
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExistis = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExistis) {
      throw new Error("This category already exists");
    }

    this.categoriesRepository.create({name, description})
  }
}

export { CreateCategoryService };