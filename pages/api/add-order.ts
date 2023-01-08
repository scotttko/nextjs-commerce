// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { OrderItem, PrismaClient } from '@prisma/client'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function addOrder(
  userId: string,
  items: Omit<OrderItem, 'id'>[],
  orderInfo?: { receiver: string; address: string; phoneNumber: string }
) {
  try {
    // orderItem을 만든다
    let orderItemIds = []
    console.log(items)
    for (const item of items) {
      const orderItem = await prisma.orderItem.create({
        data: { ...item },
      })

      console.log(`Created id: ${orderItem.id}`)
      orderItemIds.push(orderItem.id)
    }

    console.log(JSON.stringify(orderItemIds))

    // 만들어진 orderitemIds를 포함한 order을 만든다
    const response = await prisma.orders.create({
      data: {
        userId,
        orderItemIds: orderItemIds.join(','),
        ...orderInfo,
        status: 0,
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
  const { items, orderInfo } = JSON.parse(req.body)
  console.log(session)
  if (session == null) {
    res.status(200).json({ items: [], message: 'No session' })
    return
  }

  try {
    const wishlist = await addOrder(String(session.id), items, orderInfo)
    console.log(wishlist)
    res.status(200).json({ items: wishlist, message: 'Success' })
  } catch (error) {
    res.status(400).json({ message: `Failed to load` })
  }
}
