import { useQuery } from "@tanstack/react-query";

import { lookupEvents } from "@/shared/api/queries";
import { FiltersPayload } from "@/shared/api/queries/events/types";


export function useLookupEvents(filters: FiltersPayload) {
    const { query, queryKey } = lookupEvents(filters);
    const { data, isLoading, isError } = useQuery(queryKey, query);

    return { events: data?.object || [], isEventsLoading: isLoading, isEventsError: isError };
}
