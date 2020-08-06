import React from 'react';
import { AuthMenuItemRouterLink } from './styles';

export const LoginMenu = () => (
  <>
    <AuthMenuItemRouterLink to="/auth/login">Sign in</AuthMenuItemRouterLink>
    <AuthMenuItemRouterLink to="/auth/register">Register</AuthMenuItemRouterLink>
  </>
);
