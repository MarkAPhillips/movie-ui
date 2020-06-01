import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { useQuery } from '@apollo/react-hooks';

// types
type AppState = {
  state: {
    searchText: string;
  };
}
const TYPE_NAME = 'AppState';

export const initState = {
  state : {
    __typename: TYPE_NAME,
    searchText: '',
  },
};

const GET_STATE = gql`
  {
    state @client {
      searchText
    }
  }
`;

export const SET_STATE= gql`
  mutation setState($searchText: String!) {
    setState(searchText: $searchText) @client
  }
`;

export const getAppState = (): any => {
  const { data: { state } } = useQuery<any>(GET_STATE);
  return state;
}

export const stateMutations = {
  setState: (root: any, { searchText }: { searchText: string }, { cache }: { cache: InMemoryCache}): any => {
    cache.writeData({ data: { state: { __typename: TYPE_NAME, searchText } } });
    return null;
  }
}

