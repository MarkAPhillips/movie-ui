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