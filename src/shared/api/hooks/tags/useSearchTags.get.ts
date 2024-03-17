import { searchTags } from "@/shared/api/queries";
import { useQuery } from "@tanstack/react-query";

export function useSearchTags(searchTerm: string) {
    const { query, queryKey } = searchTags(searchTerm);
    const { data, isLoading, isError } = useQuery(queryKey, query);

    return { tags: data?.object || [], isTagsLoading: isLoading, isTagsError: isError };
}
