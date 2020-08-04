import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastType } from './Toast';
import { rounded } from '../../styles/mixins';
import { toastNotificationVar } from '../../apollo/appState';

type ToastListProps = {
  toastList: ToastType[];
  dismissTime?: number;
}

type NotificationToastProps = {
  backgroundColor: string;
}

const NotificiationToast = styled.div<NotificationToastProps>`
  ${rounded}
  background: ${(props) => props.backgroundColor};
  opacity: 0.9;
  display:flex;
  justify-content: space-between;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  box-shadow: 0 0 10px #999;
  max-height: 100px;
  width: 365px;
  height: 70px;
  color: ${(props) => props.theme.colorWhite};
  padding: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  color: inherit;
  right: 0.6em;
  top: 0.6em;
  font-weight: 700;
  outline: none;
  border: none;
  text-shadow: 0 1px 0 ${(props) => props.theme.colorWhite};
  opacity: .8;
  line-height: 1;
  font-size: 14px;
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
`;

const NotificationImage = styled.div`
  font-size: 22px;
  width: 60px;
`;

const NotificationMessagePanel = styled.div`
  padding: 0;
  width: 90%;
`;

const NotificationTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  height: 18px;
  margin-bottom: 4px;
`;

const NotificationMessage = styled.div`
  margin: 0;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ToastList = ({ toastList, dismissTime = 5000 }: ToastListProps) => {
  const [list, setList] = useState<ToastType []>(toastList);
  const removeToast = (id: string) => {
    const filteredList = toastList.filter((item) => item.id !== id);
    // eslint-disable-next-line no-param-reassign
    toastList = [...filteredList];
    setList(filteredList);
    toastNotificationVar(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        removeToast(toastList[0].id);
      }
    }, dismissTime);
    return () => {
      clearInterval(interval);
    };
  }, [toastList]);

  return (
    <>
      {list.map((toast) => (
        <NotificiationToast key={toast.id} backgroundColor={toast.backgroundColor}>
          <CloseButton onClick={() => removeToast(toast.id)}>X</CloseButton>
          <NotificationImage>
            <FontAwesomeIcon icon={toast.icon} />
          </NotificationImage>
          <NotificationMessagePanel>
            <NotificationTitle>{toast.title}</NotificationTitle>
            <NotificationMessage>{toast.message}</NotificationMessage>
          </NotificationMessagePanel>
        </NotificiationToast>
      ))}
    </>
  );
};
