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
  query Movie($id: Int!, $showCast: Boolean!) {
    movie(id: $id, showCast: $showCast) {
      id,
      title,
      overview,
      imageUrl,
      voteAverage,
      voteCount,
      releaseDate,
      originalLanguage,
      popularity,
      runTime,
      homePage,
      genres {
        name,
      }
      cast @include(if: $showCast) {
        id,
        character,
        person {
          id,
          name,
          imageUrl
        }
      },
      similar {
        id
        title
        overview
        imageUrl
      }
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
