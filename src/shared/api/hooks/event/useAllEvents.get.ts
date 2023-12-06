import { useQuery } from "@tanstack/react-query";

import { getAllEvents } from "@/shared/api/queries";


export function useGetAllEvents() {
    const { query, queryKey } = getAllEvents();
    const { data, isLoading, isError } = useQuery(queryKey, query);

    return { allEvents: data?.object || [], allEventsLoading: isLoading, allEventsError: isError };
}
