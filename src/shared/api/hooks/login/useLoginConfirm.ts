import { useMutation } from "@tanstack/react-query";

import { loginConfirm } from "@/shared/api/queries/login";


export function useLoginConfirm() {
    const { mutateAsync, isLoading, isError } = useMutation(
        ["confirmCode", "login"],
        loginConfirm,
    );
    return { mutateAsync, isLoading, isError };
}