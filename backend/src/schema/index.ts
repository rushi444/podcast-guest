import { makeSchema } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'
import * as path from 'path'
import { User } from './types/models/User'
import { Query } from './types/Query'
import { Mutation } from './types/Mutation'


export default makeSchema({
    types: [User, Query, Mutation],
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