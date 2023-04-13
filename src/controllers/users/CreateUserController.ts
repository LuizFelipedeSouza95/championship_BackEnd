import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";

export class CreateUsercontroller {
  async handle(req: Request, res: Response) {
    const { name, email, password, teamName } = req.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      email,
      password,
      teamName,
    });
    return res.json(user);
  }
}
