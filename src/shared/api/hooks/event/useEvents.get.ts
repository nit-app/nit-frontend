import { useQuery } from "@tanstack/react-query";

import { FiltersPayload, lookupEvents } from "@/shared/api/queries";


export function useLookupEvents(filters: FiltersPayload) {
    const { query, queryKey } = lookupEvents(filters);
    const { data, isLoading, isError } = useQuery(queryKey, query);

    return { events: data?.object || [], isEventsLoading: isLoading, isEventsError: isError };
}




