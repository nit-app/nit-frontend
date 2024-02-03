import { useMutation } from "@tanstack/react-query";
import { queryClient, useGetMe } from "@/shared/api/hooks";
import { revoke } from "@/shared/api/queries";

export function useRevoke() {
    const { auth } = useGetMe();
    const { isLoading, isError, mutateAsync } = useMutation(revoke, {
        onSuccess: () => queryClient.invalidateQueries(["me"])
    });

    return { mutateAsync, auth, isUserLoading: isLoading, isEventError: isError };
}