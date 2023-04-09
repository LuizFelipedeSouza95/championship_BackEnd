import prismaClient from "../../prisma/index";

import { Request, Response } from "express";
import { CreateClassificationService } from "../../services/classifications/CreateClassificationService";

export class CreateClassificationController {
  async handle(req: Request, res: Response) {
    const { team_id, namePlayer } = req.body;
    const createUserService = new CreateClassificationService();
    const user = await createUserService.execute({
      namePlayer,
      team_id,
    });
    return res.json(user);
  }
}
