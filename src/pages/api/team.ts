import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  res.status(200).json({ ok: true });
}
export default withHandler({
  methods: ['POST'],
  handler,
});
