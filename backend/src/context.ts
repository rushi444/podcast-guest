import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

interface IContext {
    prisma: PrismaClient
}

export const createContext = ({ event, context }: any): any => {
    return {
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
        prisma
    }
}