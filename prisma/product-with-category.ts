import { PrismaClient, Prisma } from '@prisma/client'
import { caps, hoodies, pants, sneakers, tshirts } from './data/productData'

const prisma = new PrismaClient()

const productData: Prisma.productsCreateInput[] = [
  ...sneakers,
  ...tshirts,
  ...pants,
  ...caps,
  ...hoodies,
]

async function main() {
  const CATEGORIES = ['Sneakers', 'T-Shirts', 'Pants', 'Cap', 'Hoodie']
  CATEGORIES.forEach(async (c, i) => {
    const product = await prisma.categories.upsert({
      where: { id: i + 1 },
      update: { name: c },
      create: { name: c },
    })
    console.log(`Upsert category id: ${product.id}`)
  })

  await prisma.products.deleteMany({})

  for (const p of productData) {
    const product = await prisma.products.create({
      data: p,
    })
    console.log(`Created id: ${product.id}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
