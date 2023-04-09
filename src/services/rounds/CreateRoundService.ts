import prismaClient from "../../prisma/index";

interface RoundRequest {
  roundNumber: number;
  homePlayer: string;
  homePlayer_id: string;
  scoreHome: number;
  scoreVisiting: number;
  visitingPlayers: string;
  visitingPlayers_id: string;
  disabledInputs: boolean;
}

class CreateRoundService {
  async execute({
    roundNumber,
    homePlayer,
    homePlayer_id,
    scoreHome,
    scoreVisiting,
    visitingPlayers,
    visitingPlayers_id,
    disabledInputs,
  }: RoundRequest) {
    const rounds = await prismaClient.round.create({
      data: {
        roundNumber,
        homePlayer,
        homePlayer_id,
        scoreHome,
        scoreVisiting,
        visitingPlayers,
        visitingPlayers_id,
        disabledInputs,
      },
      select: {
        id: true,
        roundNumber: true,
        homePlayer: true,
        scoreHome: true,
        visitingPlayers: true,
        scoreVisiting: true,
        disabledInputs: true,
      },
    });

    return rounds;
  }
}

export { CreateRoundService };
