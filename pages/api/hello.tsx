// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getSession} from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getSession({req})

  if (!session) return res.status(403).send('Forbidden')
  res.status(200).json({ name: 'John Doe' })
}
