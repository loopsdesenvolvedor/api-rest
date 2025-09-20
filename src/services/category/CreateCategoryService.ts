import prisma from "../../lib/prisma";
import { CreateCategoryProps } from "../../@types/Category";

class CreateCategoryService {
  async execute({ name }: CreateCategoryProps) {
    if (!name || name === "") {
      throw new Error("Name incorrect");
    }

    const category = await prisma.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CreateCategoryService };
