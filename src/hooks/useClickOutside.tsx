import { useEffect, MutableRefObject } from 'react';

export const useClickOutside = <T extends HTMLElement, >
  (ref: MutableRefObject<T>, callback: Function) => {
  useEffect(
    () => {
      const mouseHandler = (event: MouseEvent) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
        callback(event);
      };

      document.addEventListener('mousedown', mouseHandler);

      return () => {
        document.removeEventListener('mousedown', mouseHandler);
      };
    },
    [ref, callback],
  );
};
