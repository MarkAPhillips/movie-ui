import gql from 'graphql-tag';
import { AppState, TYPE_NAME } from '../types';

export const GET_STATE = gql`
  {
    state @client {
      searchText
      __typename
    }
  }
`;

export const initState: AppState = {
  state : {
    __typename: TYPE_NAME,
    searchText: '',
  },
};
