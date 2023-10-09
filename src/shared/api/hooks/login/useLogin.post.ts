import { useMutation } from "@tanstack/react-query";

import { postLogin } from "@/shared/api/queries/login";


export function usePostLogin() {
    const { mutateAsync, isLoading, isError } = useMutation(
        postLogin, { onSuccess: (data) => data.bearer }
    );
    return { postLogin: mutateAsync, postLoginLoading: isLoading, postLoginError: isError };
}