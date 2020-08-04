import React, { useEffect, useState } from 'react';
import { AuthType } from '../../apollo/types';
import { ProfileNameText } from './styles';

export const ProfileName = () => {
  const [name, setName] = useState<string | null>(null);
  const getName = async () => {
    const auth = await localStorage.getItem('auth');
    if (auth) {
      const deserializeAuth: AuthType = JSON.parse(auth);
      const { user } = deserializeAuth;
      setName(`${user.firstName} ${user.lastName}`);
    }
  };

  useEffect(() => {
    if (!name) getName();
  }, []);

  return (
    <ProfileNameText>{name}</ProfileNameText>
  );
};
