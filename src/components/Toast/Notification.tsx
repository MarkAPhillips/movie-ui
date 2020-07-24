import React from 'react';
import { ToastPortal, Toast } from '..';
import { useQuery } from '@apollo/client';
import { GET_APP_STATE } from '../../apollo/appState';

export const Notification = () => {
  const { data } = useQuery(GET_APP_STATE);
  const { state } = data;
  return (
    <ToastPortal>
      {state.toastNotification && (
        <Toast notification={state.toastNotification}/>
      )}
    </ToastPortal>
  )
};
