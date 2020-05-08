import { makeSchema } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'
import * as path from 'path'


export const schema =  makeSchema({
    types: [],
    plugins: [nexusPrismaPlugin()],
    outputs: {
        typegen: path.join(
            __dirname,
            '../generated/nexus.ts',
        ),
        schema: path.join(__dirname, '../generated/schema.graphql')
    },
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '@prisma/client',
                alias: 'prisma',
            },
            {
                source: require.resolve('../context'),
                alias: 'Context',
            },
        ],
    },
})