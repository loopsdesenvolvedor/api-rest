import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    try {
      const user_id = req.user_id;
      const detailUserService = new DetailUserService();
      const user = await detailUserService.execute(user_id);

      return res.status(200).json(user);
    } catch (err: any) {
      const status = err.status || 500;
      const message = err.message || "Internal server error";
      return res.status(status).json({ message });
    }
  }
}

export { DetailUserController };
