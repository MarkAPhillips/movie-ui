import { ApolloError } from 'apollo-boost';

export const TYPE_NAME = 'AppState';

export interface ApolloData<T> {
  data: T | null;
  loading? : boolean;
  error? : ApolloError;
}

export type AppState = {
  state: {
    searchText: string;
    __typename: typeof TYPE_NAME;
  };
}
