import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GET_STATE } from './queries';
import { ToastNotification } from '../types';

/* State mutations */
export const SET_SEARCH_TEXT = gql`
  mutation setSearchText($searchText: String!) {
    setSearchText(searchText: $searchText) @client
  }
`;

export const SET_AUTH= gql`
  mutation setAuth($isAuthorised: Boolean) {
    setAuth(isAuthorised: $isAuthorised) @client
  }
`;

export const SET_NOTIFICATION= gql`
  mutation setNotication($notification: NotificationInput) {
    setNotification(notification: $notification) @client
  }
`;

const stateMutationHandler = <T>(propValue: T, propName: string, cache: InMemoryCache): any => {
  const { state } = cache.readQuery<any>({ query: GET_STATE });
  console.log('>>>>>>>>>>', state, propValue, propName);
  cache.writeData({ data: { state: { ...state, [propName]: propValue }}});
  return null;
};

/* State resolvers */
export const stateMutations = {
  setSearchText: (root: any, { searchText }: { searchText: string }, { cache }: { cache: InMemoryCache}): any => {
    return stateMutationHandler<string>(searchText, 'searchText', cache);
  },
  setAuth: (root: any, { isAuthorised }: { isAuthorised: boolean }, { cache }: { cache: InMemoryCache}): any => {
    return stateMutationHandler<boolean>(isAuthorised, 'isAuthorised', cache);
  },
  setNotification: (root: any, { notification }: { notification: ToastNotification }, { cache }: { cache: InMemoryCache}): any => {
    return stateMutationHandler<ToastNotification>(notification, 'notification', cache);
  },
}
