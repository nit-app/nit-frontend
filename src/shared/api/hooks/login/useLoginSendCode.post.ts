import { useMutation } from "@tanstack/react-query";

import { loginSendCode } from "@/shared/api/queries";


export function useLoginSendCode() {
    const { mutateAsync, isLoading, isError } = useMutation(
        ["sendCode", "login"],
        loginSendCode,
    );
    return { loginSendCode: mutateAsync, loginSendCodeIsLoading: isLoading, loginSendCodeIsError: isError };
}