import { Request, Response } from "express";
import { CreateTeamsService } from "../../services/teams/CreateTeamsService";

export class CreateTeamController {
  async handle(req: Request, res: Response) {
    const createUserService = new CreateTeamsService();
    const user = await createUserService.execute();
    return res.json(user);
  }
}
