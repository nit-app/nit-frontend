import { getMe } from "@/shared/api/queries";
import { useQuery } from "@tanstack/react-query";

export function useGetMe() {
    const { query, queryKey } = getMe();
    const { data, isLoading, isError } = useQuery(queryKey, query);
    return { auth: Boolean(data), isUserLoading: isLoading, isEventError: isError, user: data?.object };
}