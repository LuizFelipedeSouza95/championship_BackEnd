import { Request, Response } from "express";
import { GetOneTeamsService } from "../../services/teams/GetOneTeamsService";

class GetOneTeamsController {
  async handle(req: Request, res: Response) {
    const team = req.query.team as string;
    const sendTeams = new GetOneTeamsService();
    const teams = await sendTeams.execute({
      team
    });

    return res.json(teams);
  }
}

export { GetOneTeamsController };
