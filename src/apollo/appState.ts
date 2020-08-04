import { makeVar, gql, InMemoryCache } from '@apollo/client';
import { ToastNotification } from './types';

export const searchTextVar = makeVar<string>('');
export const isAuthorisedVar = makeVar<boolean>(false);
export const toastNotificationVar = makeVar<ToastNotification | null>(null);

export const GET_APP_STATE = gql`
  query GetAppState {
    state @client {
      searchText
      isAuthorised
      toastNotification {
        toastType
        title
        message
      }
    }
  }
`;

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        state: {
          read() {
            return {
              searchText: searchTextVar(),
              isAuthorised: isAuthorisedVar(),
              toastNotification: toastNotificationVar(),
            };
          },
        },
      },
    },
  },
});
