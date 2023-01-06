// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { OrderItem, PrismaClient } from '@prisma/client'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function getComments(productId: number) {
  try {
    //orders 테이블에서 나의 주문들을 조회한다
    const orderItems = await prisma.orderItem.findMany({
      where: { productId },
    })
    console.log(orderItems)

    let response = []

    //orderItems를 기반으로 Comment를 조회한다
    for (const orderItem of orderItems) {
      const res = await prisma.comment.findUnique({
        where: { orderItemId: orderItem.id },
      })
      console.log('res', res)

      if (res != null) {
        response.push({ ...orderItem, ...res })
      }
    }

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
  const { productId } = req.query
  if (productId == null) {
    res.status(200).json({ items: [], message: 'No productId' })
    return
  }

  try {
    const wishlist = await getComments(Number(productId))
    res.status(200).json({ items: wishlist ?? [], message: 'Success' })
  } catch (error) {
    res.status(400).json({ message: `Failed to load` })
  }
}
