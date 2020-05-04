import ApolloClient from 'apollo-boost';
import { ENV_VARS } from './constants';

export const client = new ApolloClient({
    uri: ENV_VARS.API_URL,
});