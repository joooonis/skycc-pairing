import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === 'POST') {
    const {
      body: { team, name },
    } = req;
    const newTeam = await client.team.create({
      data: {
        team,
        name,
      },
    });
    res.json({
      ok: true,
      team: newTeam,
    });
  }
}
export default withHandler({
  methods: ['POST'],
  handler,
});
