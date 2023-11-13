import { QueryClient } from "@tanstack/query-core";

export * from "./event";
export * from "./login";
export * from "./registration";
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            useErrorBoundary: true,
            retry: 3,
            retryDelay: 1000,
            staleTime: 60000,
            cacheTime: 600000,
        },
    },
});