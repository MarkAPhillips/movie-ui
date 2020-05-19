import gql from 'graphql-tag';

export const SET_FEATURED_MOVIE = gql`
  mutation setFeaturedMovie($id: Number!) {
    setFeaturedMovie(id: $id) @client
  }
`;

// TODO: Need to determine function signatures types for resolvers
export const setFeaturedMovie = (root: any, { id }: any, { cache }: any) => {
  cache.writeData({ data : { id } });
  return null;
};
