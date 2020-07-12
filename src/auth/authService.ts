import axios, { AxiosResponse } from 'axios';
import { SignInFormInput } from './authTypes';

export const signIn = async (data: SignInFormInput): Promise<AxiosResponse<any>> => {
  const response = await axios.post(
    `${window._env_.AUTH_API_URL}/auth/login`,
    data,
  );
  return response;
};
