import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_STATE } from '../../apollo/cache';
import { ToastPortal, Toast } from '..';

export const Notification = () => {
  const { data: { state } } = useQuery<any>(GET_STATE);
  const { notification } = state;
  console.log('notification', notification);
  return (
    <ToastPortal>
      {notification && (
        <Toast notification={notification}/>
      )}
    </ToastPortal>
  )
};
