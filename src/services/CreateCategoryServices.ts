import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}


class CreateCategoryService {
  
  constructor(private categoriesRepository: CategoriesRepository) {}
 
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExistis = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExistis) {
      throw new Error("This category already exists");
    }

    this.categoriesRepository.create({name, description})
  }
}

export { CreateCategoryService };