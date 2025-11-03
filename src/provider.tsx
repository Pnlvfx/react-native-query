import NetInfo from '@react-native-community/netinfo';
import {
  focusManager,
  onlineManager,
  QueryClientProvider as TanStackQueryClientProvider,
  type QueryClientProviderProps,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import { AppState } from 'react-native';

export const QueryClientProvider = (props: QueryClientProviderProps) => {
  /** query net info */
  useEffect(() => {
    onlineManager.setEventListener((setOnline) => {
      return NetInfo.addEventListener((state) => {
        setOnline(!!state.isConnected);
      });
    });
  }, []);

  /** query app state */
  useEffect(() => {
    const sub = AppState.addEventListener('change', (status) => {
      focusManager.setFocused(status === 'active');
    });

    return () => {
      sub.remove();
    };
  }, []);

  return <TanStackQueryClientProvider {...props} />;
};
