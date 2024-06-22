import { createEvent } from "@/shared/api/queries/events/create.post";
import { useMutation } from "@tanstack/react-query";

export function useCreate() {
    const { mutateAsync: create, isLoading } = useMutation(
        createEvent
    );

    return { create, isLoading: isLoading };
}
