import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from '../../auth/authService';
import { SET_AUTH } from '../../apollo/cache';
import { AuthType } from '../../apollo/types';

const LoginPanel = styled.div`
 width: 80px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const UserPanel = styled.div`
  width: 80px;
  span {
    display: inline-block;
    padding-left: 6px;
  }
`;

export const LogoutMenu = () => {
  const [name, setName] = useState<string|null>(null);
  const [ setIsAuthorised ] = useMutation(SET_AUTH);
  console.log('rendered');
  const getName = async() => {
    const auth = await localStorage.getItem('auth');
    if (auth) {
      const deserializeAuth: AuthType= JSON.parse(auth);
      const { user } = deserializeAuth;
      setName(`${user.firstName} ${user.lastName}`);
    }
  }

  useEffect(() => {
    if(!name) getName();
  }, []);

  const handleLogout = () => {
    logout().then(() => {
        localStorage.removeItem('auth');
        setIsAuthorised({ variables: { isAuthorised: false }})
    });
  };

  return (
    <>
      <UserPanel><FontAwesomeIcon icon={faUser} /><span>{name}</span></UserPanel>
      <LoginPanel onClick={handleLogout}>Logout</LoginPanel>
    </>
  )
}
