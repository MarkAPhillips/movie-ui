import gql from 'graphql-tag';

export const GET_POPULAR = gql`
{
  popular {
      id,
      title,
      overview,
      vote_average
    }
}
`;

export const GET_TRENDING = gql`
{
  trending {
      id,
      title,
      overview
    }
}
`;