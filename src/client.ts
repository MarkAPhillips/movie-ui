import ApolloClient from 'apollo-boost';


export const client = new ApolloClient({
    uri: 'https://eu-movie-api.herokuapp.com/',
  });