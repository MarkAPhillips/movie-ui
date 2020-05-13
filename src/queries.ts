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
  query Movie($movieId: Int!) {
    movie(movieId: $movieId) {
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
