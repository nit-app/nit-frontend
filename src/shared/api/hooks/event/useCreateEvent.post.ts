import { useMutation } from "@tanstack/react-query";

import { getAllEvents, postCreateEvent } from "@/shared/api/queries";
import { useQueriesInvalidator } from "@/shared/hooks";


export function usePostCreateEvent() {
    const { queryKey } = getAllEvents();
    const queriesInvalidator = useQueriesInvalidator(queryKey);
    const { mutateAsync, isLoading, isError } = useMutation(
        postCreateEvent, { onSuccess: queriesInvalidator }
    );

    return { postCreateEvent: mutateAsync, postCreateEventLoading: isLoading, postCreateEventError: isError };
}