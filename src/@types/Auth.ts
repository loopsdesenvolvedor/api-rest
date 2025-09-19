import { Prisma } from "../generated/prisma";

export type AuthProps = Prisma.UserGetPayload<{
  select: {
    email: true;
    password: true;
  };
}>;
