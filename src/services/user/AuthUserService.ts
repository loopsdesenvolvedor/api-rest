import prisma from "../../lib/prisma";
import { AuthProps } from "../../@types/Auth";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

class AuthUserService {
  async execute({ email, password }: AuthProps) {
    if (!email || !password) {
      throw { status: 400, message: "Email and password are required" };
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw { status: 401, message: "Invalid email or password" };
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw { status: 401, message: "Invalid email or password" };
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET as string,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  }
}

export { AuthUserService };
