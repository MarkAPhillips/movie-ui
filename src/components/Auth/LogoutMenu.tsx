import React, { useEffect, useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from '../../auth/authService';
import { AuthType } from '../../apollo/types';
import { AuthMenuItemLink, AuthMenuUserProfile } from './styles';
import { isAuthorisedVar } from '../../apollo/appState';

export const LogoutMenu = () => {
  const [name, setName] = useState<string | null>(null);
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
      isAuthorisedVar(false);
    });
  };

  return (
    <>
      <AuthMenuUserProfile><FontAwesomeIcon icon={faUser} /><span>{name}</span></AuthMenuUserProfile>
      <AuthMenuItemLink onClick={handleLogout}>Logout</AuthMenuItemLink>
    </>
  )
}
