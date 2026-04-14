import { onlineManager, QueryClient, type QueryClientConfig } from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';

export const createQueryClient = (config?: QueryClientConfig) => {
  onlineManager.setEventListener((setOnline) =>
    NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected);
    }),
  );

  return new QueryClient(config);
};
