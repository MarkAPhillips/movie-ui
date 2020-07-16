import { ApolloError } from 'apollo-boost';

export const TYPE_NAME = 'AppState';

export interface ApolloData<T> {
  data: {
    [key: string]: T;
  };
  loading? : boolean;
  error? : ApolloError;
}

export type User = {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
}

export type AuthType = {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export type AppState = {
  state: {
    searchText: string;
    isAuthorised: boolean;
    __typename: typeof TYPE_NAME;

  };
}
