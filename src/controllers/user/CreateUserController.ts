import { Request, Response } from "express";

import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const createUserService = new CreateUserService();
      const createUser = await createUserService.execute({
        name,
        email,
        password,
      });

      res.status(201).json(createUser);
    } catch (error: any) {
      res.status(400).json({
        message: error.message || "Erro ao criar usuário",
      });
    }
  }
}

export { CreateUserController };
