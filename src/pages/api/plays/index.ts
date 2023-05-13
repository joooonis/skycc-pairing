import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === 'POST') {
    const {
      body: { date, time, memberCount, teamId },
    } = req;
    const play = await client.team.create({
      data: {
        date,
        time,
        memberCount,
        team: {
          connect: {
            team: teamId,
          },
        },
      },
    });
    res.json({
      ok: true,
      play,
    });
  }
  if (req.method === 'GET') {
    const {
      query: { teamId },
    } = req;
    const plays = await client.play.findMany({
      where: {
        teamId: Number(teamId),
      },
    });
    res.json({
      ok: true,
      plays,
    });
  }
}
export default withHandler({
  methods: ['POST'],
  handler,
});
