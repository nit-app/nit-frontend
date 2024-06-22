import { QueryClient } from "@tanstack/query-core";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            useErrorBoundary: false,
            retry: 1,
            retryDelay: 1000,
            staleTime: 60000,
            cacheTime: 600000,
        },
    },
});