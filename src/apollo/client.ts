import ApolloClient, { gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { initState, stateMutations } from './cache';

const cache = new InMemoryCache()

const typeDefs = gql`
  input NotificationInput {
    toastType: String!
    title: String!
    message: String!
  }
`;


export const client = new ApolloClient({
    uri: window._env_.MOVIE_API_URL,
    cache,
    typeDefs,
    resolvers: {
      Mutation: {
        ...stateMutations,
      },
    },
});

export const resetState = () => cache.writeData({ data: initState });

resetState();
