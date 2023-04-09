import { Request, Response } from "express";
import { UpdateRoundService } from "../../services/rounds/UpdateRoundService";

class UpdateRoundController {
  async handle(req: Request, res: Response) {
    const {
      disabledInputs,
      roundNumber,
      homePlayer,
      scoreHome,
      scoreVisiting,
    } = req.body;

    const sendRound = new UpdateRoundService();
    const round = await sendRound.execute({
      disabledInputs,
      homePlayer,
      roundNumber,
      scoreHome,
      scoreVisiting,
    });

    return res.json(round);
  }
}

export { UpdateRoundController };
