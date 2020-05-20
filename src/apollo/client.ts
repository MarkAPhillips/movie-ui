import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache()

export const client = new ApolloClient({
    uri: window._env_.API_URL,
    cache,
});
