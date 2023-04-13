import prismaClient from "../../prisma";

interface TeamProps{
  team: string;
}
class GetOneTeamsService {
  async execute({ team }: TeamProps) {
    //const nomeBusca = "joão";
    console.log(team
      .toLowerCase()
      .replace(/\b(\w)/g, (match) => match.toUpperCase()));
    
    const teams = await prismaClient.team.findMany({
      where: {
        name: team
/*         name: {
          equals: team
          .toLowerCase()
          .replace(/\b(\w)/g, (match) => match.toUpperCase()),
        }, */
      },
    });

    return teams;
  }
}
export { GetOneTeamsService };
