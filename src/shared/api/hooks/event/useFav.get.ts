import { useQuery } from "@tanstack/react-query";
import { lookupFav } from "@/shared/api/queries/events/favs.get";

export function useLookupFavs() {
    const { query, queryKey } = lookupFav();
    const { data, isLoading, isError } = useQuery(queryKey, query);

    return { favs: data?.object || null, isFavsLoading: isLoading, isFavsError: isError };
}
