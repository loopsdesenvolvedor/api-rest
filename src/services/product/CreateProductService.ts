import prisma from "../../lib/prisma";
import { ProductProps } from "../../@types/Product";

class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    categoryId,
  }: ProductProps) {
    if (!name || !price || !description || !banner || !categoryId) {
      throw new Error("Todos os campos são obrigatórios");
    }

    const product = await prisma.product.create({
      data: {
        name,
        price,
        description,
        banner,
        categoryId,
      },
    });

    return product;
  }
}

export { CreateProductService };
