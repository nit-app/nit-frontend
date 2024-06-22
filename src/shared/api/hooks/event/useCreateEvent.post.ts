import { useMutation } from "@tanstack/react-query";

import { lookupEvents, postCreateEvent } from "@/shared/api/queries";
import { useQueriesInvalidator } from "@/shared/hooks";


export function useCreateEvent() {
    const { queryKey } = lookupEvents();
    const queriesInvalidator = useQueriesInvalidator(queryKey);
    const { mutateAsync, isLoading, isError } = useMutation(
        postCreateEvent, { onSuccess: queriesInvalidator }
    );

    return { postCreateEvent: mutateAsync, postCreateEventLoading: isLoading, postCreateEventError: isError };
}