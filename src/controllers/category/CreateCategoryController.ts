import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    try {
      const { name } = req.body;

      const createCategoryService = new CreateCategoryService();

      const category = await createCategoryService.execute({ name });

      return res.status(201).json(category);
    } catch (error: any) {
      res.status(400).json({
        message: error.message || "Erro ao criar categoria",
      });
    }
  }
}

export { CreateCategoryController };
