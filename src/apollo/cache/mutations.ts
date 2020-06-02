import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GET_STATE } from './queries';

/* State mutations */
export const SET_SEARCH_TEXT = gql`
  mutation setSearchText($searchText: String!) {
    setSearchText(searchText: $searchText) @client
  }
`;

/* State resolvers */
export const stateMutations = {
  setSearchText: (root: any, { searchText }: { searchText: string }, { cache }: { cache: InMemoryCache}): any => {
    const { state } = cache.readQuery<any>({ query: GET_STATE });
    cache.writeData({ data: { state: { ...state, searchText }}});
    return null;
  }
}
