import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

interface IContext {
    prisma: PrismaClient
}

export const createContext = (): IContext => {
    return {
        prisma
    }

}