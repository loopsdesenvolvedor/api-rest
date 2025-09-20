import prisma from "../../lib/prisma";

class ListCategoryService {
  async execute() {
    const category = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { ListCategoryService };
