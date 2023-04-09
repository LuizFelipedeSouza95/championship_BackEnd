import { Request, Response } from "express";
import { GetAllRoundsService } from "../../services/rounds/GetAllRoundsService";

class GetAllRoundsController {
  async handle(req: Request, res: Response) {
    const sendOrder = new GetAllRoundsService();
    const order = await sendOrder.execute();

    return res.json(order);
  }
}

export { GetAllRoundsController };
