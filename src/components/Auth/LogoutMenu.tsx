import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logout } from '../../auth/authService';
import { AuthMenuItemLink, AuthMenuUserProfile, ProfileNameText } from './styles';
import { isAuthorisedVar } from '../../apollo/appState';

type LogoutMenuProps = {
  name: string;
}

export const LogoutMenu = ({ name }: LogoutMenuProps) => {
  const handleLogout = async () => {
    await logout();
    localStorage.removeItem('auth');
    isAuthorisedVar(false);
  };
  return (
    <>
      <AuthMenuUserProfile>
        <FontAwesomeIcon icon={faUser} />
        <ProfileNameText>{name}</ProfileNameText>
      </AuthMenuUserProfile>
      <AuthMenuItemLink onClick={handleLogout}>Logout</AuthMenuItemLink>
    </>
  );
};
