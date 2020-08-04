import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  faInfoCircle, faCheckCircle, faExclamationTriangle, faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { uuid } from 'uuidv4';
import { theme } from '../../styles/theme';
import { ToastList } from './ToastList';
import { rounded } from '../../styles/mixins';
import { ToastNotification } from '../../apollo/types';

type ToastProps = {
  notification: ToastNotification;
  dismissTime?: number;
}

export type ToastType = {
  title: string;
  message: string;
  icon: IconDefinition;
  id: string;
  backgroundColor: string;
}

const toastTypes = {
  warning: faExclamationTriangle,
  info: faInfoCircle,
  success: faCheckCircle,
  danger: faExclamationCircle,
};

const toastin = keyframes`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
`;
const NotificationPanel = styled.div`
    ${rounded}
    font-size: 14px;
    box-sizing: border-box;
    position: fixed;
    bottom: 12px;
    right: 12px;
    transition: transform .6s ease-in-out;
    animation: ${toastin} .7s;
    background: ${(props) => props.theme.colorWhite};
`;

export const Toast = ({ notification, dismissTime = 5000 }: ToastProps) => {
  const [list, setList] = useState<ToastType[]>([]);
  const { toastType, title, message } = notification;
  useEffect(() => {
    const toast = {
      id: uuid(),
      title,
      message,
      icon: toastTypes[toastType],
      backgroundColor: theme[toastType],
    };
    setList([...list, toast]);
  }, [message, toastType, title]);

  if (list.length) {
    return (
      <NotificationPanel>
        <ToastList toastList={list} dismissTime={dismissTime} />
      </NotificationPanel>
    );
  }
  return null;
};
