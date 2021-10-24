import { useRef, useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useEventListener = (name: string, handler: (e: any) => void, el = window) => {
  const savedHandler = useRef<EventListener>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const isSupported = el && el.addEventListener;
      if (!isSupported) return;

      const eventListener = (e: Event) => savedHandler.current?.(e);
      el.addEventListener(name, eventListener);

      return () => el.removeEventListener(name, eventListener);
    },
    [name, el]
  );
};
