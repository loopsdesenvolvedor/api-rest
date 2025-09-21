import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    try {
      const { name, price, description, categoryId } = req.body;

      if (!req.file) {
        res.status(400).json({
          message: "Error: upload file is required",
        });
      }

      const banner = req.file?.originalname as string;

      const createProductService = new CreateProductService();
      const product = await createProductService.execute({
        name,
        price,
        description,
        banner,
        categoryId,
      });

      return res.status(201).json(product);
    } catch (error: any) {
      res.status(400).json({
        message: error.message || "Erro ao criar o produto",
      });
    }
  }
}

export { CreateProductController };
