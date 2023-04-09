import { Request, Response } from "express";
import { UpdateClassificationService } from "../../services/classifications/UpdateClassificationService";

class UpdateClassificationController {
  async handle(req: Request, res: Response) {
    const { namePlayer1, scorePlayer1, namePlayer2, scorePlayer2 } = req.body;

    const sendClassification = new UpdateClassificationService();
    const classifications = await sendClassification.execute({
      namePlayer1,
      scorePlayer1,
      namePlayer2,
      scorePlayer2,
    });

    return res.json(classifications);
  }
}

export { UpdateClassificationController };
