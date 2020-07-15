import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const LoginPanel = styled.div`
  width: 100px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const LoginMenu = () => {
  const history = useHistory();
  return (
    <>
      <LoginPanel onClick={() => history.push('/auth/login')}>Sign in</LoginPanel>
      <LoginPanel onClick={() => history.push('/auth/register')}>Register</LoginPanel>
    </>
  )
}
