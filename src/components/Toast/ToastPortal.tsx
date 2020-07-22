import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ToastPortalProps = {
  children?: ReactNode;
}

export const ToastPortal = ({ children }: ToastPortalProps) => {
  const toastRoot = document.getElementById('toast') as HTMLDivElement;
  return createPortal(children, toastRoot);
};
