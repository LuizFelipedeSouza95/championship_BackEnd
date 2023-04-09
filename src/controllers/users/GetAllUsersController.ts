import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/users/GetAllUsersService";

class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const sendUsers = new GetAllUsersService();
    const users = await sendUsers.execute();

    return res.json(users);
  }
}

export { GetAllUsersController };
