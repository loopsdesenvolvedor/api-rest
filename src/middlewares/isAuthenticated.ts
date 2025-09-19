import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

type AuthPayload = {
  sub: string;
};

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers["authorization"];

  if (!authToken) {
    return res.status(401).json({ message: "Token missing" });
  }
  const [, token] = authToken?.split(" ");

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const { sub } = verify(
      token,
      process.env.JWT_SECRET as string
    ) as AuthPayload;

    req.user_id = sub;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
}
