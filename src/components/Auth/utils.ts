import { SignInFormInput } from '../../auth/authTypes';
import { login } from '../../auth/authService';
import { transformObjectKeys } from '../../utilities/objectFormatter';
import { isAuthorisedVar } from '../../apollo/appState';
import { ToastTypes, AuthType } from '../../apollo/types';

export const getName = () => {
  const auth = localStorage.getItem('auth');
  if (auth) {
    const deserializeAuth: AuthType = JSON.parse(auth);
    const { user } = deserializeAuth;
    return (`${user.firstName} ${user.lastName}`);
  }
  return '';
};

export const loginUser = async (formInput: SignInFormInput) => {
  const response = await login(formInput);
  const { data } = response;
  const transData = transformObjectKeys(data);
  localStorage.setItem('auth', JSON.stringify(transData));
  isAuthorisedVar(true);
  return {
    notification: { toastType: 'success' as ToastTypes, title: 'Success', message: 'Logged into account' },
    redirect: true,
  };
};
