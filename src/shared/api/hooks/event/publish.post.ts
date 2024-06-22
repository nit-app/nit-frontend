import { publish as publishQuery } from "../../queries/events/publish.post";
import { useMutation } from "@tanstack/react-query";
import { lookupDrafts } from "@/shared/api/queries";
import { useQueriesInvalidator } from "@/shared/hooks";

export function usePublish() {
    const { queryKey } = lookupDrafts();
    const invalidator = useQueriesInvalidator(queryKey);
    const { mutateAsync: publish, isLoading } = useMutation(
        publishQuery, { onSuccess: () => invalidator() }
    );

    return { publish, isLoading: isLoading };
}
