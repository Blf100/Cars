import { request, response, Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";


const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExistis = categoriesRepository.findByName(name);

  if(categoryAlreadyExistis) {
    return response.status(400).json({message: "This category already exists"});
  }

  categoriesRepository.create({name, description})

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all =   categoriesRepository.list();

  return response.status(200).json(all);
});

export { categoriesRoutes };