// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export default prisma

// Solution For Fast Refresh In Nextjs dev env

// npm i -D prisma

// npx prisma init

// npx prisma migrate dev

// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
