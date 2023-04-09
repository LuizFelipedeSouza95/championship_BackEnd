import { Request, Response } from "express";
import { GetAllTeamsService } from "../../services/teams/GetAllTeamsService";

class GetAllTeamsController {
  async handle(req: Request, res: Response) {
    const sendTeams = new GetAllTeamsService();
    const teams = await sendTeams.execute();

    return res.json(teams);
  }
}

export { GetAllTeamsController };
