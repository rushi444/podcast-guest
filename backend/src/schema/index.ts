import { makeSchema } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'
import * as path from 'path'

import { User } from './models/User'
import { Query } from './Query'
import { Mutation } from './Mutation'
import { GraphQLSchema } from 'graphql'

export const schema: GraphQLSchema = makeSchema({
    types: [Query, Mutation, User],
    plugins: [nexusPrismaPlugin({shouldGenerateArtifacts: false})],
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