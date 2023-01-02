// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Cart, PrismaClient } from '@prisma/client'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function deleteCart(id: number) {
  try {
    const response = await prisma.cart.delete({
      where: { id: id },
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
  const { id } = JSON.parse(req.body)
  console.log(session)
  if (session == null) {
    res.status(200).json({ items: [], message: 'No session' })
    return
  }

  try {
    const wishlist = await deleteCart(id)
    console.log(wishlist)
    res.status(200).json({ items: wishlist, message: 'Success' })
  } catch (error) {
    res.status(400).json({ message: `Failed to load` })
  }
}
