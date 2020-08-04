/* eslint-disable no-underscore-dangle */
import axios, { AxiosResponse } from 'axios';
import { snakeCase } from 'lodash';
import { SignInFormInput, RegisterFormInput } from './authTypes';
import { transformObjectKeys } from '../utilities/objectFormatter';

export const login = async (data: SignInFormInput): Promise<AxiosResponse<any>> => {
  const response = await axios.post(
    `${window._env_.AUTH_API_URL}/auth/login/`,
    data,
  );
  return response;
};

export const registration = async (formData: RegisterFormInput): Promise<AxiosResponse<any>> => {
  const data = transformObjectKeys(formData, snakeCase, ['password1', 'password2']);
  const response = await axios.post(
    `${window._env_.AUTH_API_URL}/auth/registration`,
    data,
  );
  return response;
};

export const logout = async (): Promise<AxiosResponse<any>> => {
  const response = await axios.post(
    `${window._env_.AUTH_API_URL}/auth/logout/`,
  );
  return response;
};
