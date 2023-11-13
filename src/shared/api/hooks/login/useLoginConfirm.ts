import { useMutation } from "@tanstack/react-query";

import { loginConfirm as loginConfirmQueryFn } from "@/shared/api/queries/login";


export function useLoginConfirm() {
    const { mutateAsync: loginConfirm, isLoading: loginConfirmIsLoading, isError: loginConfirmIsError } = useMutation(
        ["confirmCode", "login"],
        loginConfirmQueryFn,
    );
    return { loginConfirm, loginConfirmIsLoading, loginConfirmIsError };
}