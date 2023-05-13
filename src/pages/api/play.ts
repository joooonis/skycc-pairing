import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === 'GET') {
    res.json({
      ok: true,
      plays: [
        {
          id: 1,
          time: '19:00',
          date: '2023-05-14',
          memberCount: 5,
          team: '어흥',
        },
        {
          id: 2,
          time: '20:00',
          date: '2023-05-15',
          memberCount: 6,
          team: '연승',
          school: '연세대학교',
        },
        {
          id: 3,
          time: '19:00',
          date: '2023-05-16',
          memberCount: 5,
          team: '고대짱짱맨',
          school: '고려대학교',
        },
        {
          id: 4,
          time: '14:00',
          date: '2023-05-16',
          memberCount: 5,
          team: '서장훈',
          school: '서울대학교',
        },
      ],
    });
  }
}
export default withHandler({
  methods: ['GET'],
  handler,
});
