import { ApolloServer } from 'apollo-server-lambda'
import { createContext } from './src/context';
import { schema } from './src/schema'

const app = new ApolloServer({ schema, context: createContext });

exports.graphqlHandler = app.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});