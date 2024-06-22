import { lookupEvent } from "@/shared/api/queries";
import { useQuery } from "@tanstack/react-query";

export function useLookupEvent(id: string) {
    const { query, queryKey } = lookupEvent(id);
    const { data, isLoading, isError } = useQuery(queryKey, query);

    return { event: data?.object || null, isEventLoading: isLoading, isEventError: isError };
}
