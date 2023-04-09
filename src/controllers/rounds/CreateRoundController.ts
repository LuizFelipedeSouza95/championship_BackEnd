import prismaClient from "../../prisma";
import { Request, Response } from "express";
import { CreateRoundService } from "../../services/rounds/CreateRoundService";

import { createRoundByUsers } from "./generateRoudeds";

export class CreateRoundController {
  async handle(req: Request, res: Response) {
    const Users = await prismaClient.user.findMany();

    const playersName: string[] = Users.map((obj) => obj.name);
    const roundeds = createRoundByUsers(playersName);
    const createRoundService = new CreateRoundService();

    for (const round in roundeds) {
      const jogos = roundeds[round];
      const numeroround = round.match(/\d+/)[0];

      for (let i = 0; i < jogos.length; i++) {
        const jogo = jogos[i];

        const gethomePlayerId = await prismaClient.user.findFirst({
          where: { name: jogo.casa },
        });
        const homePlayerId = gethomePlayerId?.id ?? null;

        const getvisitPlayerId = await prismaClient.user.findFirst({
          where: { name: jogo.fora },
        });
        const visitPlayerId = getvisitPlayerId?.id ?? null;

        await createRoundService.execute({
          roundNumber: parseInt(numeroround),
          homePlayer: jogo.casa,
          homePlayer_id: homePlayerId,
          scoreHome: 0,
          scoreVisiting: 0,
          visitingPlayers: jogo.fora,
          visitingPlayers_id: visitPlayerId,
          disabledInputs: false,
        });
        
      }
    }
    return res.status(201).json("Rounds Created");
  }
}
