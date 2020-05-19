import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setFeaturedMovie } from './mutations';

const cache = new InMemoryCache()

export const client = new ApolloClient({
    uri: window._env_.API_URL,
    cache,
    resolvers: {
      Mutation: {
        setFeaturedMovie,
      }
    }
});

const initialState = {
  movie: null,
};

cache.writeData( {  data: initialState });
