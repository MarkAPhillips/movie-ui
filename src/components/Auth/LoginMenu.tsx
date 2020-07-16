import React from 'react';
import { useHistory } from 'react-router-dom';
import { AuthMenuItemLink } from './styles';

export const LoginMenu = () => {
  const history = useHistory();
  return (
    <>
      <AuthMenuItemLink onClick={() => history.push('/auth/login')}>Sign in</AuthMenuItemLink>
      <AuthMenuItemLink onClick={() => history.push('/auth/register')}>Register</AuthMenuItemLink>
    </>
  )
}
