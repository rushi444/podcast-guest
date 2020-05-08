import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export type Context = {
    prisma: PrismaClient
}

export const context = ({ req }: any): Context => {
    return {
        prisma
    }
}