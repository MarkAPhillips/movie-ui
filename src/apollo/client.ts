import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { initState, stateMutations } from './cache';

const cache = new InMemoryCache()

export const client = new ApolloClient({
    uri: window._env_.API_URL,
    cache,
    resolvers: {
      Mutation: {
        ...stateMutations,
      },
    },
});

export const resetState = () => cache.writeData({ data: initState });

resetState();
