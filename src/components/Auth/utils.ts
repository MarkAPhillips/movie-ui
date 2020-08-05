import { AuthType } from '../../apollo/types';

export const getName = () => {
  const auth = localStorage.getItem('auth');
  if (auth) {
    const deserializeAuth: AuthType = JSON.parse(auth);
    const { user } = deserializeAuth;
    return (`${user.firstName} ${user.lastName}`);
  }
  return '';
};
