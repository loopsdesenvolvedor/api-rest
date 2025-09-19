import prisma from "../../lib/prisma";

class DetailUserService {
  async execute(user_id: string) {
    const user = await prisma.user.findUnique({
      where: { id: user_id },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
      throw { status: 404, message: "User not found" };
    }

    return user;
  }
}

export { DetailUserService };
