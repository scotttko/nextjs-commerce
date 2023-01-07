// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Cart, Orders, PrismaClient } from '@prisma/client'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function updateOrder(item: Orders) {
  try {
    const response = await prisma.orders.update({
      where: { id: item.id },
      data: { status: item.status },
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
  const { item } = JSON.parse(req.body)
  console.log(session)
  if (session == null || session.id !== item.userId) {
    res
      .status(200)
      .json({ items: [], message: 'No session or invalid session' })
    return
  }

  try {
    const order = await updateOrder(item)
    console.log(order)
    res.status(200).json({ items: order, message: 'Success' })
  } catch (error) {
    res.status(400).json({ message: `Failed to load` })
  }
}
