import { ApolloError } from '@apollo/client';

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
    notification: ToastNotification | null;
    __typename: typeof TYPE_NAME;
  };
}

export type ToastTypes = 'warning' | 'danger' | 'info' | 'success';

export type ToastNotification = {
  toastType: ToastTypes;
  title: string;
  message: string;
}
