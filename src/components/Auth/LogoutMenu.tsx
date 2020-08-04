import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logout } from '../../auth/authService';
import { AuthMenuItemLink, AuthMenuUserProfile } from './styles';
import { isAuthorisedVar } from '../../apollo/appState';
import { ProfileName } from './ProfileName';

export const LogoutMenu = () => {
  const handleLogout = async () => {
    await logout();
    localStorage.removeItem('auth');
    isAuthorisedVar(false);
  };
  return (
    <>
      <AuthMenuUserProfile>
        <FontAwesomeIcon icon={faUser} />
        <ProfileName />
      </AuthMenuUserProfile>
      <AuthMenuItemLink onClick={handleLogout}>Logout</AuthMenuItemLink>
    </>
  );
};
