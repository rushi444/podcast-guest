import { ApolloServer } from 'apollo-server'
import { context } from './context'
import schema from './schema'

const app = new ApolloServer({ schema, context })

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at: http://localhost:4000`))