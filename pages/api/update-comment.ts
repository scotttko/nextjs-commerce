// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function updateComment({
  userId,
  orderItemId,
  rate,
  contents,
}: {
  userId: string
  orderItemId: number
  rate: number
  contents: string
}) {
  try {
    const response = await prisma.comment.upsert({
      where: { orderItemId },
      update: { contents, rate },
      create: {
        userId,
        orderItemId,
        contents,
        rate,
      },
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await unstable_getServerSession(req, res, authOptions)
  const { orderItemId, rate, contents } = JSON.parse(req.body)
  console.log(session)
  if (session == null) {
    res.status(200).json({ items: [], message: 'No session' })
    return
  }

  try {
    const wishlist = await updateComment({
      userId: String(session.id),
      orderItemId: orderItemId,
      rate: rate,
      contents: contents,
    })
    console.log(wishlist)
    res.status(200).json({ items: wishlist, message: 'Success' })
  } catch (error) {
    res.status(400).json({ message: `Failed to load` })
  }
}
