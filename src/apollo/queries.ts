import gql from 'graphql-tag';

export const GET_POPULAR = gql`
{
  popular {
      id,
      title,
      overview,
      imageUrl,
      voteAverage
    }
}
`;

export const GET_TRENDING = gql`
{
  trending {
      id,
      title,
      overview,
      imageUrl
    }
}
`;

export const GET_MOVIE = gql`
  query Movie($id: Int!) {
    movie(id: $id) {
      id,
      title,
      overview,
      imageUrl,
      voteAverage,
      voteCount,
      releaseDate,
      originalLanguage,
      popularity
    }
  }
`;

export const SEARCH_MOVIES = gql`
  query SearchMovies($searchText: String) {
    search(filter:{ searchText:$searchText}) {
      totalCount
      page
      noOfPages
      edges {
        node {
          id,
          title,
          imageUrl,
          releaseDate,
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const GET_FEATURED_MOVIE = gql`
  query GetFeaturedMovie {
    movie @client
  }
`;
