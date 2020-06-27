import gql from 'graphql-tag';

const FRAGMENT_MOVIE_DETAILS = gql`
    fragment MovieDetails on Movie {
      id
      title
      overview
      images {
        poster
        backDrop
      }
    }
`;

export const GET_POPULAR = gql`
{
  popular {
      voteAverage
      ...MovieDetails
    }
}
${FRAGMENT_MOVIE_DETAILS}
`;

export const GET_TRENDING = gql`
{
  trending {
    voteAverage
    ...MovieDetails
    }
}
${FRAGMENT_MOVIE_DETAILS}
`;

export const GET_BIO = gql`
  query Person($id: Int!) {
    person(id: $id) {
      id
      name
      biography
      birthDate
      deathDate
      imageUrl
      placeOfBirth
      age
      credits {
        id
        character
        movie {
          ...MovieDetails
          releaseDate
        }
      }
    }
}
${FRAGMENT_MOVIE_DETAILS}
`;

export const GET_MOVIE = gql`
  query Movie($id: Int!, $showCast: Boolean!) {
    movie(id: $id, showCast: $showCast) {
      ...MovieDetails
      voteAverage
      voteCount
      releaseDate
      originalLanguage
      popularity
      runTime
      homePage
      genres {
        name
      }
      certifications {
        countryCode
        certification
      }
      credits {
        crew {
          id
          job
          name
        }
        cast @include(if: $showCast) {
          id
          character
          person {
            id
            name
            imageUrl
          }
        }
      }
      recommended {
        ...MovieDetails
      }
    }
  }
  ${FRAGMENT_MOVIE_DETAILS}
`;

export const SEARCH_MOVIES = gql`
  query SearchMovies($searchText: String) {
    search(filter:{ searchText:$searchText}) {
      totalCount
      page
      noOfPages
      edges {
        node {
          ...MovieDetails
          releaseDate
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
  ${FRAGMENT_MOVIE_DETAILS}
`;

export const GET_FEATURED = gql`
  {
    featured {
      ...MovieDetails
      voteAverage
      voteCount
      releaseDate
      originalLanguage
      popularity
      runTime
      genres {
        name
      }
      certifications {
        countryCode
        certification
      }
      credits {
        crew {
          id
          job
          name
        }
      }
    }
  }
  ${FRAGMENT_MOVIE_DETAILS}
`;
