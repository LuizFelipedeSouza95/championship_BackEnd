import { Request, Response } from "express";
import { GetAllClassificationService } from "../../services/classifications/GetAllClassificationService";

class GetAllClassificationController {
  async handle(req: Request, res: Response) {
    const sendClassification = new GetAllClassificationService();
    const classifications = await sendClassification.execute();

    return res.json(classifications);
  }
}

export { GetAllClassificationController };
