/* eslint-disable no-underscore-dangle */
import { AxiosResponse } from 'axios';
import { snakeCase } from 'lodash';
import { SignInFormInput, RegisterFormInput } from './authTypes';
import { transformObjectKeys } from '../utilities/objectFormatter';
import { authApi } from './authApi';

export const login = async (data: SignInFormInput): Promise<AxiosResponse<any>> => authApi.post(
  'login/',
  data,
);

export const registration = async (formData: RegisterFormInput): Promise<AxiosResponse<any>> => {
  const data = transformObjectKeys(formData, snakeCase, ['password1', 'password2']);
  return authApi.post(
    'registration/',
    data,
  );
};

export const logout = async (): Promise<AxiosResponse<any>> => authApi.post('logout/');
