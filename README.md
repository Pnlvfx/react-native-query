# React Native Query

A React Native wrapper for TanStack Query (React Query) that adds intelligent network-aware refetching using NetInfo.

## What is this?

`react-native-query` is a **1:1 wrapper** around TanStack Query that enhances it with native network state detection. It automatically handles query refetching when your app:

- Regains internet connectivity
- Comes back from the background
- Reconnects to a network

This package uses `@react-native-community/netinfo` under the hood to provide a more reliable and native refetch experience compared to the web-based network detection in vanilla TanStack Query.

## Installation

```bash
npm install react-native-query
# or
yarn add react-native-query
# or
pnpm add react-native-query
```

### Additional Setup

Since this package uses NetInfo, you need to install its peer dependency:

```bash
npm install @react-native-community/netinfo
# or
yarn add @react-native-community/netinfo
```

For iOS, don't forget to install pods:

```bash
cd ios && pod install
```

## Migration from TanStack Query

If you're already using TanStack Query, migration is simple:

1. **Remove TanStack Query** (it will be installed automatically as a dependency):

```bash
   npm uninstall @tanstack/react-query
```

2. **Replace imports** throughout your codebase:

```typescript
// Before
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

// After
import { useQuery, QueryClient, QueryClientProvider } from 'react-native-query';
```

That's it! Everything else works exactly the same.

## Usage

Use it exactly like TanStack Query:

```typescript
import { QueryClient, QueryClientProvider, useQuery } from 'react-native-query';

// Create a client
const queryClient = new QueryClient();

// Wrap your app
function App() {
  return (



  );
}

// Use queries as normal
function MyComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  // ... rest of your component
}
```

## What's Different?

The **only difference** is the `QueryClientProvider` component, which has been enhanced to:

- Listen to network state changes via NetInfo
- Automatically refetch queries when connectivity is restored
- Provide better offline/online detection for React Native environments

All other APIs, hooks, and functionality remain **100% identical** to TanStack Query.

## Documentation

For complete API documentation, configuration options, and advanced usage, refer to the official [TanStack Query documentation](https://tanstack.com/query/latest/docs/react/overview).

Everything documented there applies to this package.

## Why Use This?

- ✅ **Better network detection** - Uses native NetInfo instead of browser APIs
- ✅ **Drop-in replacement** - No code changes needed beyond imports
- ✅ **Automatic refetching** - Handles connectivity changes intelligently
- ✅ **Always up-to-date** - Stays in sync with TanStack Query releases
- ✅ **React Native optimized** - Built specifically for mobile environments

## License

MIT
