import { focusManager, QueryClientProvider as TanStackQueryClientProvider, type QueryClientProviderProps } from '@tanstack/react-query';
import { useEffect } from 'react';
import { AppState } from 'react-native';

export const QueryClientProvider = ({ client, children }: QueryClientProviderProps) => {
  /** query app state */
  useEffect(() => {
    const sub = AppState.addEventListener('change', (status) => {
      focusManager.setFocused(status === 'active');
    });

    return () => {
      sub.remove();
    };
  }, []);

  return <TanStackQueryClientProvider client={client}>{children}</TanStackQueryClientProvider>;
};
