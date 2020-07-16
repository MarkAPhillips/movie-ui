import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from '../../auth/authService';
import { SET_AUTH } from '../../apollo/cache';
import { AuthType } from '../../apollo/types';
import { AuthMenuItemLink, AuthMenuUserProfile } from './styles';

export const LogoutMenu = () => {
  const [name, setName] = useState<string | null>(null);
  const [setIsAuthorised] = useMutation(SET_AUTH);
  const getName = async () => {
    const auth = await localStorage.getItem('auth');
    if (auth) {
      const deserializeAuth: AuthType = JSON.parse(auth);
      const { user } = deserializeAuth;
      setName(`${user.firstName} ${user.lastName}`);
    }
  }

  useEffect(() => {
    if (!name) getName();
  }, []);

  const handleLogout = () => {
    logout().then(() => {
      localStorage.removeItem('auth');
      setIsAuthorised({ variables: { isAuthorised: false } })
    });
  };

  return (
    <>
      <AuthMenuUserProfile><FontAwesomeIcon icon={faUser} /><span>{name}</span></AuthMenuUserProfile>
      <AuthMenuItemLink onClick={handleLogout}>Logout</AuthMenuItemLink>
    </>
  )
}
