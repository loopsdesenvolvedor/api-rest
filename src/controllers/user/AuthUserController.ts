import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const authUserService = new AuthUserService();

      const user = await authUserService.execute({ email, password });

      res.status(200).json(user);
    } catch (error: any) {
      res.status(error.status || 500).json({
        message: error.message || "Internal server error",
      });
    }
  }
}

export { AuthUserController };
