import { useQueryClient } from "@tanstack/react-query";


export function useQueriesInvalidator(queries: any) {
    const queryClient = useQueryClient();
    return () => queryClient.invalidateQueries(queries);
}