import { ApolloServer } from 'apollo-server-lambda'
import { createContext } from './src/context';
import schema from './src/schema'

const server = new ApolloServer({ schema, context: createContext });

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});