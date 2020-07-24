import { ApolloClient, gql } from '@apollo/client';
import { cache } from './appState';

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
});
