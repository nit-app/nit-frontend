import { useMutation } from "@tanstack/react-query";

import { getAllHello, postHello } from "@/shared/api/queries";
import { useQueriesInvalidator } from "@/shared/hooks";


export function usePostHello() {
    const { queryKey } = getAllHello();
    const queriesInvalidator = useQueriesInvalidator(queryKey);
    const { mutateAsync, isLoading, isError } = useMutation(
        postHello, { onSuccess: queriesInvalidator }
    );

    return { postHello: mutateAsync, postHelloLoading: isLoading, postHelloError: isError };
}