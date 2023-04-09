import { Request, Response } from "express";
import { GetOneUsersService } from "../../services/users/GetOneUsersService";

class GetOneUsersController {
  async handle(req: Request, res: Response) {
    const email = req.query.email as string;
    const sendUser = new GetOneUsersService();
    const user = await sendUser.execute({
      email,
    });

    return res.json(user);
  }
}

export { GetOneUsersController };
