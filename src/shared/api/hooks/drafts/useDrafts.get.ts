import { useQuery } from "@tanstack/react-query";
import { lookupDrafts } from "@/shared/api/queries";

export function useLookupDrafts() {
    const { query, queryKey } = lookupDrafts();
    const { data, isLoading, isError } = useQuery(queryKey, query);

    return { drafts: data?.object || [], isDraftsLoading: isLoading, isDraftsError: isError };
}
