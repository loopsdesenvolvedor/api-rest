import { CreateUserProps } from "../../@types/User";
import prisma from "../../lib/prisma";
import { hash } from "bcryptjs";

class CreateUserService {
  async execute({ name, email, password }: CreateUserProps) {
    if (!email) throw new Error("Email incorrect");

    const userAlreadyExists = await prisma.user.findFirst({
      where: { email },
    });

    if (userAlreadyExists) throw new Error("Email already exists");

    const passwordHash = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
